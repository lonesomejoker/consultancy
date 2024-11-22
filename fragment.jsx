 <section className="grid grid-cols-2 gap-10 mt-8">
        {Array.from({ length: 3 }, (_, index) => {
          const idx = index + 1;
          return (
            <React.Fragment key={idx}>
              <div>
                <p className="mb-4 font-[500]">Statistic {idx} *</p>
                <InputField
                  rounded="rounded"
                  type="number"
                  name={`stats_${idx}`}
                  placeholder={`Statistic ${idx}`}
                  value={summaryForm[`stats_${idx}`]}
                  onChange={handleChange}
                  error={errors[`stats_${idx}`]}
                  required
                />
              </div>       
            </React.Fragment>
          );
        })}
      </section>
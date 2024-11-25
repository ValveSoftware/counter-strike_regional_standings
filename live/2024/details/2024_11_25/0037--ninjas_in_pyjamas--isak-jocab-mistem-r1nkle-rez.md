### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [37](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [28]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  1218.8<br />
<br />
Final Rank Value (1218.8) = Starting Rank Value (1273.2) + Head To Head Adjustments (-54.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.489[<sup>1</sup>](#table2)
- Bounty Collected: 0.454[<sup>2</sup>](#table1)
- Opponent Network: 0.164[<sup>2</sup>](#table1)
- LAN Wins: 0.638[<sup>2</sup>](#table1)

The average of these factors is 0.436<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1273.2
- 400 + ( ( 0.436 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 1273.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       16 | 2024-11-24 | Spirit        | L   | 1.000      | -            | -                | -                | -         |    -1.05 | isak, jocab, MisteM, r1nkle, REZ |
|           43 |       23 | 2024-11-23 | 9 Pandas      | W   | 1.000      | 0.143        | 0.092 (0.013)    | 0.892 (0.127)    | 1 (1.000) |    18.66 | isak, jocab, MisteM, r1nkle, REZ |
|           42 |       49 | 2024-11-23 | TSM           | W   | 1.000      | 0.143        | -                | 0.616 (0.088)    | 1 (1.000) |     7.48 | isak, jocab, MisteM, r1nkle, REZ |
|           41 |       81 | 2024-11-21 | HEROIC        | L   | 1.000      | -            | -                | -                | -         |    -2.63 | isak, jocab, MisteM, r1nkle, REZ |
|           40 |       97 | 2024-11-21 | PARIVISION    | W   | 1.000      | 0.143        | -                | 0.434 (0.062)    | 1 (1.000) |    11.24 | isak, jocab, MisteM, r1nkle, REZ |
|           39 |      109 | 2024-11-20 | G2            | L   | 1.000      | -            | -                | -                | -         |    -0.36 | isak, jocab, MisteM, r1nkle, REZ |
|           38 |      309 | 2024-11-12 | BetBoom       | L   | 1.000      | -            | -                | -                | -         |   -14.44 | isak, jocab, MisteM, r1nkle, REZ |
|           37 |      340 | 2024-11-11 | Zero Tenacity | W   | 1.000      | 0.384        | 0.076 (0.029)    | 0.743 (0.286)    | -         |    12.52 | isak, jocab, MisteM, r1nkle, REZ |
|           36 |      380 | 2024-11-09 | Metizport     | L   | 1.000      | -            | -                | -                | -         |   -12.28 | isak, jocab, MisteM, r1nkle, REZ |
|           35 |      401 | 2024-11-08 | Alliance      | W   | 1.000      | 0.432        | 0.029 (0.012)    | 0.459 (0.199)    | 1 (1.000) |     5.72 | isak, jocab, MisteM, r1nkle, REZ |
|           34 |      680 | 2024-10-25 | Imperial      | L   | 0.994      | -            | -                | -                | -         |   -14.66 | isak, jocab, MisteM, r1nkle, REZ |
|           33 |      708 | 2024-10-23 | HEROIC        | L   | 0.982      | -            | -                | -                | -         |    -2.41 | isak, jocab, MisteM, r1nkle, REZ |
|           32 |      710 | 2024-10-23 | Imperial      | W   | 0.981      | 0.477        | 0.124 (0.058)    | 0.583 (0.272)    | -         |    15.87 | isak, jocab, MisteM, r1nkle, REZ |
|           31 |      855 | 2024-10-16 | JANO          | L   | 0.935      | -            | -                | -                | -         |   -24.33 | isak, jocab, MisteM, r1nkle, REZ |
|           30 |      868 | 2024-10-16 | B8            | L   | 0.933      | -            | -                | -                | -         |   -12.68 | isak, jocab, MisteM, r1nkle, REZ |
|           29 |     1148 | 2024-10-04 | ECSTATIC      | L   | 0.853      | -            | -                | -                | -         |   -20.25 | isak, jocab, MisteM, r1nkle, REZ |
|           28 |     2035 | 2024-09-07 | HEROIC        | L   | 0.674      | -            | -                | -                | -         |    -2.37 | alex, isak, maxster, r1nkle, REZ |
|           27 |     2086 | 2024-09-05 | FaZe          | L   | 0.662      | -            | -                | -                | -         |    -2.24 | alex, isak, maxster, r1nkle, REZ |
|           26 |     2135 | 2024-09-04 | Natus Vincere | L   | 0.655      | -            | -                | -                | -         |    -0.56 | alex, isak, maxster, r1nkle, REZ |
|           25 |     2169 | 2024-09-03 | HEROIC        | W   | 0.648      | 0.889        | 0.597 (0.343)    | 0.550 (0.317)    | 1 (0.648) |    18.50 | alex, isak, maxster, r1nkle, REZ |
|           24 |     2276 | 2024-08-29 | Monte         | L   | 0.615      | -            | -                | -                | -         |   -14.02 | alex, isak, maxster, r1nkle, REZ |
|           23 |     2287 | 2024-08-29 | GUN5          | L   | 0.614      | -            | -                | -                | -         |   -15.94 | alex, isak, maxster, r1nkle, REZ |
|           22 |     2632 | 2024-08-21 | AMKAL         | L   | 0.562      | -            | -                | -                | -         |   -15.93 | alex, isak, maxster, r1nkle, REZ |
|           21 |     2732 | 2024-08-19 | Cloud9        | L   | 0.548      | -            | -                | -                | -         |   -13.49 | alex, isak, maxster, r1nkle, REZ |
|           20 |     2739 | 2024-08-19 | PARIVISION    | W   | 0.548      | -            | -                | -                | -         |     3.94 | alex, isak, maxster, r1nkle, REZ |
|           19 |     3202 | 2024-08-04 | Astralis      | L   | 0.447      | -            | -                | -                | -         |    -3.12 | alex, isak, maxster, r1nkle, REZ |
|           18 |     3226 | 2024-08-03 | G2            | L   | 0.441      | -            | -                | -                | -         |    -0.27 | alex, isak, maxster, r1nkle, REZ |
|           17 |     3264 | 2024-08-02 | FaZe          | W   | 0.434      | 0.581        | 0.329 (0.083)    | 0.325 (0.082)    | 1 (0.434) |    12.06 | alex, isak, maxster, r1nkle, REZ |
|           16 |     3308 | 2024-08-01 | Cloud9        | W   | 0.427      | 0.581        | 0.047 (0.012)    | 0.419 (0.104)    | 1 (0.427) |     2.79 | alex, isak, maxster, r1nkle, REZ |
|           15 |     3360 | 2024-07-31 | G2            | L   | 0.421      | -            | -                | -                | -         |    -0.24 | alex, isak, maxster, r1nkle, REZ |
|           14 |     3714 | 2024-07-20 | Passion UA    | L   | 0.347      | -            | -                | -                | -         |    -7.15 | alex, isak, maxster, r1nkle, REZ |
|           13 |     3788 | 2024-07-18 | MOUZ NXT      | W   | 0.335      | -            | -                | -                | -         |     0.69 | alex, isak, maxster, r1nkle, REZ |
|           12 |     3920 | 2024-07-16 | Nexus         | W   | 0.322      | 0.500        | 0.267 (0.043)    | 0.669 (0.108)    | -         |     7.41 | alex, isak, maxster, r1nkle, REZ |
|           11 |     4182 | 2024-06-16 | fnatic        | L   | 0.122      | -            | -                | -                | -         |    -1.74 | alex, isak, maxster, r1nkle, REZ |
|           10 |     4243 | 2024-06-14 | paiN          | W   | 0.110      | 0.548        | 0.199 (0.012)    | -                | 1 (0.110) |     2.76 | alex, isak, maxster, r1nkle, REZ |
|            9 |     4251 | 2024-06-14 | 9z            | W   | 0.109      | -            | -                | -                | 1 (0.109) |     1.24 | alex, isak, maxster, r1nkle, REZ |
|            8 |     4412 | 2024-06-09 | The MongolZ   | L   | 0.075      | -            | -                | -                | -         |    -0.08 | alex, isak, maxster, r1nkle, REZ |
|            7 |     4478 | 2024-06-08 | FURIA         | W   | 0.068      | -            | -                | -                | 1 (0.068) |     1.78 | alex, isak, maxster, r1nkle, REZ |
|            6 |     4528 | 2024-06-07 | fnatic        | W   | 0.062      | -            | -                | -                | -         |     1.08 | alex, isak, maxster, r1nkle, REZ |
|            5 |     4594 | 2024-06-06 | Sashi         | W   | 0.055      | -            | -                | -                | -         |     0.42 | alex, isak, maxster, r1nkle, REZ |
|            4 |     4616 | 2024-06-06 | The MongolZ   | L   | 0.054      | -            | -                | -                | -         |    -0.05 | alex, isak, maxster, r1nkle, REZ |
|            3 |     4628 | 2024-06-06 | Astralis      | W   | 0.052      | -            | -                | -                | -         |     1.32 | alex, isak, maxster, r1nkle, REZ |
|            2 |     4662 | 2024-06-05 | HEROIC        | W   | 0.048      | 0.715        | 0.597 (0.020)    | -                | -         |     1.40 | alex, isak, maxster, r1nkle, REZ |
|            1 |     4679 | 2024-06-05 | ENCE          | W   | 0.046      | -            | -                | -                | -         |     0.93 | alex, isak, maxster, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,049.42)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-11-09 |      1.000 | $11,635.00     | $11,635.00      |
| 2024-10-20 |      0.962 | $5,000.00      | $4,808.17       |
| 2024-09-22 |      0.775 | $7,000.00      | $5,427.17       |
| 2024-08-25 |      0.589 | $5,000.00      | $2,942.54       |
| 2024-08-04 |      0.447 | $10,500.00     | $4,698.45       |
| 2024-06-16 |      0.123 | $7,000.00      | $863.46         |
| 2024-06-09 |      0.075 | $56,000.00     | $4,174.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

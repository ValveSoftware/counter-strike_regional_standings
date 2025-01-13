### Roster Details<br />
Team Name: Insilio<br />
Roster: faydett, FpSSS, Pipw, Polt, sugaR<br />
Global Rank: [111](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [81]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  839.9<br />
<br />
Final Rank Value (839.9) = Starting Rank Value (800.5) + Head To Head Adjustments (39.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.362[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.093[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 800.5
- 400 + ( ( 0.202 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 800.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |      243 | 2024-12-12 | Fire Flux        | L   | 0.988      | -            | -                | -                | -         |   -12.24 | faydett, FpSSS, Pipw, Polt, sugaR |
|           53 |      255 | 2024-12-11 | CYBERSHOKE       | L   | 0.982      | -            | -                | -                | -         |   -14.51 | faydett, FpSSS, Pipw, Polt, sugaR |
|           52 |      269 | 2024-12-10 | FLuffy Gangsters | W   | 0.975      | 0.143        | -                | 0.583 (0.081)    | 0 (0.000) |    11.68 | faydett, FpSSS, Pipw, Polt, sugaR |
|           51 |     1766 | 2024-10-03 | WW               | L   | 0.519      | -            | -                | -                | -         |   -13.76 | faydett, FpSSS, Pipw, Polt, sugaR |
|           50 |     1799 | 2024-10-02 | Partizan         | L   | 0.513      | -            | -                | -                | -         |    -1.97 | faydett, FpSSS, Pipw, Polt, sugaR |
|           49 |     1867 | 2024-09-30 | SovvyKiNG        | W   | 0.500      | -            | -                | -                | 0 (0.000) |     2.83 | faydett, FpSSS, Pipw, Polt, sugaR |
|           48 |     1900 | 2024-09-29 | 500              | W   | 0.493      | 0.354        | 0.059 (0.010)    | 0.845 (0.147)    | 0 (0.000) |     9.12 | faydett, FpSSS, Pipw, Polt, sugaR |
|           47 |     2035 | 2024-09-26 | B8               | L   | 0.472      | -            | -                | -                | -         |    -2.65 | faydett, FpSSS, Pipw, Polt, sugaR |
|           46 |     2188 | 2024-09-22 | Lynn Vision      | W   | 0.447      | 0.435        | 0.047 (0.009)    | 0.264 (0.051)    | 0 (0.000) |    10.53 | faydett, FpSSS, Pipw, Polt, sugaR |
|           45 |     2236 | 2024-09-20 | Rebels           | L   | 0.434      | -            | -                | -                | -         |    -6.66 | faydett, FpSSS, Pipw, Polt, sugaR |
|           44 |     2244 | 2024-09-20 | los kogutos      | W   | 0.432      | 0.435        | 0.072 (0.013)    | 0.851 (0.160)    | 0 (0.000) |    11.42 | faydett, FpSSS, Pipw, Polt, sugaR |
|           43 |     2297 | 2024-09-18 | Endpoint         | L   | 0.422      | -            | -                | -                | -         |    -6.08 | faydett, FpSSS, Pipw, Polt, sugaR |
|           42 |     2363 | 2024-09-16 | Kosovo           | W   | 0.406      | -            | -                | -                | 0 (0.000) |     2.37 | faydett, FpSSS, Pipw, Polt, sugaR |
|           41 |     2384 | 2024-09-15 | SINNERS          | L   | 0.400      | -            | -                | -                | -         |    -2.47 | faydett, FpSSS, Pipw, Polt, sugaR |
|           40 |     2405 | 2024-09-14 | UNPAID           | W   | 0.395      | 0.435        | 0.141 (0.024)    | 0.216 (0.037)    | 0 (0.000) |     9.03 | faydett, FpSSS, Pipw, Polt, sugaR |
|           39 |     2487 | 2024-09-12 | SAW              | W   | 0.380      | 0.435        | 0.264 (0.044)    | 0.452 (0.074)    | 0 (0.000) |    11.43 | faydett, FpSSS, Pipw, Polt, sugaR |
|           38 |     2542 | 2024-09-10 | Revenant         | W   | 0.368      | -            | -                | -                | 0 (0.000) |     4.98 | faydett, FpSSS, Pipw, Polt, sugaR |
|           37 |     2583 | 2024-09-08 | Rhyno            | W   | 0.354      | -            | -                | -                | 0 (0.000) |     4.65 | faydett, FpSSS, Pipw, Polt, sugaR |
|           36 |     2592 | 2024-09-08 | SINNERS          | W   | 0.352      | 0.384        | 0.103 (0.014)    | 0.698 (0.094)    | -         |     9.30 | faydett, FpSSS, Pipw, Polt, sugaR |
|           35 |     2629 | 2024-09-07 | Monte Gen        | L   | 0.345      | -            | -                | -                | -         |    -5.07 | faydett, FpSSS, Pipw, Polt, sugaR |
|           34 |     2640 | 2024-09-06 | SovvyKiNG        | W   | 0.341      | -            | -                | -                | -         |     2.21 | faydett, FpSSS, Pipw, Polt, sugaR |
|           33 |     2648 | 2024-09-06 | UNPAID           | L   | 0.340      | -            | -                | -                | -         |    -2.75 | faydett, FpSSS, Pipw, Polt, sugaR |
|           32 |     2685 | 2024-09-05 | Spirit Academy   | L   | 0.334      | -            | -                | -                | -         |    -2.56 | faydett, FpSSS, Pipw, Polt, sugaR |
|           31 |     2692 | 2024-09-05 | GUN5             | L   | 0.333      | -            | -                | -                | -         |    -1.84 | faydett, FpSSS, Pipw, Polt, sugaR |
|           30 |     2738 | 2024-09-03 | SovvyKiNG        | W   | 0.321      | -            | -                | -                | -         |     2.13 | faydett, FpSSS, Pipw, Polt, sugaR |
|           29 |     2798 | 2024-09-01 | RUSH B           | W   | 0.307      | 0.384        | 0.065 (0.008)    | -                | -         |     5.83 | faydett, FpSSS, Pipw, Polt, sugaR |
|           28 |     2810 | 2024-08-31 | los kogutos      | W   | 0.302      | 0.435        | 0.072 (0.009)    | 0.851 (0.112)    | -         |     8.34 | faydett, FpSSS, Pipw, Polt, sugaR |
|           27 |     2859 | 2024-08-29 | SovvyKiNG        | W   | 0.288      | -            | -                | -                | -         |     2.00 | faydett, FpSSS, Pipw, Polt, sugaR |
|           26 |     2865 | 2024-08-29 | Cloud9           | L   | 0.287      | -            | -                | -                | -         |    -1.64 | faydett, FpSSS, Pipw, Polt, sugaR |
|           25 |     2995 | 2024-08-27 | FAVBET           | W   | 0.272      | 0.435        | 0.072 (0.009)    | 0.894 (0.106)    | -         |     5.90 | faydett, FpSSS, Pipw, Polt, sugaR |
|           24 |     3144 | 2024-08-23 | Nemiga           | L   | 0.248      | -            | -                | -                | -         |    -0.50 | faydett, FpSSS, Pipw, Polt, sugaR |
|           23 |     3164 | 2024-08-23 | Qiang            | W   | 0.246      | -            | -                | -                | -         |     2.18 | faydett, FpSSS, Pipw, Polt, sugaR |
|           22 |     3174 | 2024-08-22 | AMKAL            | W   | 0.241      | -            | -                | -                | -         |     4.39 | faydett, FpSSS, Pipw, Polt, sugaR |
|           21 |     3220 | 2024-08-21 | BIG              | L   | 0.234      | -            | -                | -                | -         |    -0.25 | faydett, FpSSS, Pipw, Polt, sugaR |
|           20 |     3252 | 2024-08-21 | 9 Pandas         | L   | 0.233      | -            | -                | -                | -         |    -0.97 | faydett, FpSSS, Pipw, Polt, sugaR |
|           19 |     3308 | 2024-08-19 | ALTERNATE aTTaX  | L   | 0.221      | -            | -                | -                | -         |    -1.04 | faydett, FpSSS, Pipw, Polt, sugaR |
|           18 |     3356 | 2024-08-17 | Monte Gen        | L   | 0.208      | -            | -                | -                | -         |    -3.09 | faydett, FpSSS, Pipw, Polt, sugaR |
|           17 |     3366 | 2024-08-17 | Endpoint         | L   | 0.207      | -            | -                | -                | -         |    -2.67 | faydett, FpSSS, Pipw, Polt, sugaR |
|           16 |     3410 | 2024-08-15 | Illuminar        | W   | 0.194      | -            | -                | -                | -         |     2.02 | faydett, FpSSS, Pipw, Polt, sugaR |
|           15 |     3429 | 2024-08-15 | los kogutos      | W   | 0.192      | 0.435        | 0.072 (0.006)    | 0.851 (0.071)    | -         |     5.46 | faydett, FpSSS, Pipw, Polt, sugaR |
|           14 |     3447 | 2024-08-14 | RUBY             | L   | 0.186      | -            | -                | -                | -         |    -4.62 | faydett, FpSSS, Pipw, Polt, sugaR |
|           13 |     3664 | 2024-08-07 | Monte            | L   | 0.141      | -            | -                | -                | -         |    -0.97 | faydett, FpSSS, Pipw, Polt, sugaR |
|           12 |     3786 | 2024-08-04 | 9 Pandas         | L   | 0.119      | -            | -                | -                | -         |    -2.16 | faydett, FpSSS, Pipw, Polt, sugaR |
|           11 |     3820 | 2024-08-03 | 1WIN             | W   | 0.113      | -            | -                | -                | -         |     1.12 | faydett, FpSSS, Pipw, Polt, sugaR |
|           10 |     3852 | 2024-08-02 | ARCRED           | L   | 0.106      | -            | -                | -                | -         |    -1.75 | faydett, FpSSS, Pipw, Polt, sugaR |
|            9 |     3892 | 2024-08-01 | Metizport        | W   | 0.100      | -            | -                | -                | -         |     3.01 | faydett, FpSSS, Pipw, Polt, sugaR |
|            8 |     3932 | 2024-07-31 | Sashi            | L   | 0.094      | -            | -                | -                | -         |    -0.66 | faydett, FpSSS, Pipw, Polt, sugaR |
|            7 |     3977 | 2024-07-30 | 9 Pandas         | L   | 0.087      | -            | -                | -                | -         |    -1.60 | faydett, FpSSS, Pipw, Polt, sugaR |
|            6 |     4044 | 2024-07-28 | Metizport        | W   | 0.074      | -            | -                | -                | -         |     2.23 | faydett, FpSSS, Pipw, Polt, sugaR |
|            5 |     4166 | 2024-07-24 | Zero Tenacity    | L   | 0.047      | -            | -                | -                | -         |    -0.29 | faydett, FpSSS, Pipw, Polt, sugaR |
|            4 |     4238 | 2024-07-22 | Rebels           | L   | 0.033      | -            | -                | -                | -         |    -0.48 | faydett, FpSSS, Pipw, Polt, sugaR |
|            3 |     4303 | 2024-07-20 | UNiTY            | W   | 0.019      | -            | -                | -                | -         |     0.43 | faydett, FpSSS, Pipw, Polt, sugaR |
|            2 |     4341 | 2024-07-19 | 9INE             | L   | 0.012      | -            | -                | -                | -         |    -0.10 | faydett, FpSSS, Pipw, Polt, sugaR |
|            1 |     4378 | 2024-07-18 | EYEBALLERS       | W   | 0.007      | -            | -                | -                | -         |     0.13 | faydett, FpSSS, Pipw, Polt, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,052.58)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.634 | $500.00        | $316.86         |
| 2024-10-03 |      0.521 | $2,500.00      | $1,301.52       |
| 2024-09-15 |      0.401 | $5,000.00      | $2,005.76       |
| 2024-08-18 |      0.214 | $2,000.00      | $428.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

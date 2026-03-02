### Roster Details<br />
Team Name: Friendly Campers<br />
Roster: bajmi, moonwalk, olimp, reiko, SaMey<br />
Global Rank: [60](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [45]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  1130.9<br />
<br />
Final Rank Value (1130.9) = Starting Rank Value (1133.6) + Head To Head Adjustments (-2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.464[<sup>1</sup>](#table2)
- Bounty Collected: 0.356[<sup>2</sup>](#table1)
- Opponent Network: 0.107[<sup>2</sup>](#table1)
- LAN Wins: 0.624[<sup>2</sup>](#table1)

The average of these factors is 0.388<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1133.6
- 400 + ( ( 0.388 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1133.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           69 |     1717 | 2026-01-14 | HEROIC             | L   | 0.886      | -            | -                | -                | -         |    -3.48 | bajmi, moonwalk, olimp, reiko, SaMey |
|           68 |     1784 | 2026-01-05 | MOUZ NXT           | L   | 0.825      | -            | -                | -                | -         |   -12.31 | bajmi, moonwalk, olimp, reiko, SaMey |
|           67 |     1813 | 2026-01-04 | AaB                | L   | 0.819      | -            | -                | -                | -         |   -20.74 | bajmi, moonwalk, olimp, reiko, SaMey |
|           66 |     1816 | 2026-01-04 | ASTRAL             | L   | 0.819      | -            | -                | -                | -         |   -17.86 | bajmi, moonwalk, olimp, reiko, SaMey |
|           65 |     1820 | 2026-01-04 | SINQU              | W   | 0.818      | -            | -                | -                | 1 (0.818) |     0.85 | bajmi, moonwalk, olimp, reiko, SaMey |
|           64 |     1824 | 2026-01-04 | MINLATE            | W   | 0.818      | 0.314        | -                | 0.462 (0.119)    | 1 (0.818) |     7.13 | bajmi, moonwalk, olimp, reiko, SaMey |
|           63 |     1827 | 2026-01-04 | Fingers Crossed    | W   | 0.818      | -            | -                | -                | 1 (0.818) |     0.53 | bajmi, moonwalk, olimp, reiko, SaMey |
|           62 |     1887 | 2025-12-21 | BESTIA             | L   | 0.726      | -            | -                | -                | -         |    -9.89 | bajmi, moonwalk, olimp, reiko, SaMey |
|           61 |     1905 | 2025-12-20 | fnatic             | W   | 0.721      | 0.339        | 0.115 (0.028)    | 0.504 (0.123)    | 1 (0.721) |    15.30 | bajmi, moonwalk, olimp, reiko, SaMey |
|           60 |     1917 | 2025-12-20 | 9INE               | W   | 0.719      | 0.339        | 0.072 (0.018)    | 0.699 (0.170)    | 1 (0.719) |    15.19 | bajmi, moonwalk, olimp, reiko, SaMey |
|           59 |     1929 | 2025-12-19 | CYBERSHOKE         | L   | 0.714      | -            | -                | -                | -         |    -9.80 | bajmi, moonwalk, olimp, reiko, SaMey |
|           58 |     1939 | 2025-12-19 | ENCE               | W   | 0.712      | 0.339        | 0.046 (0.011)    | 0.590 (0.142)    | 1 (0.712) |    13.09 | bajmi, moonwalk, olimp, reiko, SaMey |
|           57 |     1958 | 2025-12-18 | HEROIC Academy     | W   | 0.705      | -            | -                | -                | 1 (0.705) |     2.21 | bajmi, moonwalk, olimp, reiko, SaMey |
|           56 |     2042 | 2025-12-11 | magic              | L   | 0.660      | -            | -                | -                | -         |   -11.97 | bajmi, moonwalk, olimp, reiko, SaMey |
|           55 |     2499 | 2025-11-21 | FUT                | L   | 0.527      | -            | -                | -                | -         |    -2.11 | bajmi, moonwalk, olimp, reiko, SaMey |
|           54 |     2503 | 2025-11-21 | Nexus              | L   | 0.527      | -            | -                | -                | -         |   -11.79 | bajmi, moonwalk, olimp, reiko, SaMey |
|           53 |     2529 | 2025-11-21 | STATE              | W   | 0.524      | -            | -                | -                | 1 (0.524) |     5.79 | bajmi, moonwalk, olimp, reiko, SaMey |
|           52 |     2581 | 2025-11-19 | SINNERS            | L   | 0.514      | -            | -                | -                | -         |    -4.00 | bajmi, moonwalk, olimp, reiko, SaMey |
|           51 |     3557 | 2025-10-20 | Sangal             | W   | 0.314      | 0.384        | -                | 0.693 (0.084)    | -         |     2.90 | bajmi, moonwalk, olimp, reiko, SaMey |
|           50 |     3567 | 2025-10-19 | Alliance           | W   | 0.307      | 0.384        | 0.124 (0.015)    | 0.943 (0.111)    | -         |     6.67 | bajmi, moonwalk, olimp, reiko, SaMey |
|           49 |     3585 | 2025-10-18 | Sangal             | L   | 0.301      | -            | -                | -                | -         |    -6.83 | bajmi, moonwalk, olimp, reiko, SaMey |
|           48 |     3682 | 2025-10-15 | ex-Zero Tenacity   | W   | 0.281      | -            | -                | -                | -         |     0.84 | bajmi, moonwalk, olimp, reiko, SaMey |
|           47 |     3764 | 2025-10-12 | RUBY               | L   | 0.259      | -            | -                | -                | -         |    -7.13 | bajmi, moonwalk, olimp, reiko, SaMey |
|           46 |     3782 | 2025-10-11 | EYEBALLERS         | W   | 0.253      | 0.435        | 0.182 (0.020)    | 0.707 (0.078)    | -         |     4.53 | bajmi, moonwalk, olimp, reiko, SaMey |
|           45 |     3806 | 2025-10-10 | BET-M              | W   | 0.247      | 0.384        | -                | 0.717 (0.068)    | -         |     2.84 | bajmi, moonwalk, olimp, reiko, SaMey |
|           44 |     3823 | 2025-10-10 | Alliance           | W   | 0.246      | 0.435        | 0.124 (0.013)    | 0.943 (0.101)    | -         |     5.33 | bajmi, moonwalk, olimp, reiko, SaMey |
|           43 |     3872 | 2025-10-09 | ex-Fingers Crossed | W   | 0.239      | -            | -                | -                | -         |     1.95 | bajmi, moonwalk, olimp, reiko, SaMey |
|           42 |     3909 | 2025-10-08 | RUBY               | W   | 0.234      | -            | -                | -                | -         |     0.90 | bajmi, moonwalk, olimp, reiko, SaMey |
|           41 |     3923 | 2025-10-08 | RUBY               | W   | 0.232      | -            | -                | -                | -         |     0.91 | bajmi, moonwalk, olimp, reiko, SaMey |
|           40 |     3970 | 2025-10-07 | JiJieHao           | W   | 0.226      | -            | -                | -                | -         |     1.75 | bajmi, moonwalk, olimp, reiko, SaMey |
|           39 |     4079 | 2025-10-05 | Nexus              | W   | 0.214      | -            | -                | -                | -         |     2.48 | bajmi, moonwalk, olimp, reiko, SaMey |
|           38 |     4087 | 2025-10-05 | CYBERSHOKE         | W   | 0.213      | -            | -                | -                | -         |     3.77 | bajmi, moonwalk, olimp, reiko, SaMey |
|           37 |     4167 | 2025-10-03 | ex-Inner Circle    | W   | 0.200      | -            | -                | -                | -         |     0.09 | bajmi, moonwalk, olimp, reiko, SaMey |
|           36 |     4210 | 2025-10-02 | Nemesis            | W   | 0.193      | -            | -                | -                | -         |     4.29 | bajmi, moonwalk, olimp, reiko, SaMey |
|           35 |     4246 | 2025-10-01 | FAVBET             | L   | 0.186      | -            | -                | -                | -         |    -4.31 | bajmi, moonwalk, olimp, reiko, SaMey |
|           34 |     4256 | 2025-10-01 | Mousquetaires      | W   | 0.185      | -            | -                | -                | -         |     0.15 | bajmi, moonwalk, olimp, reiko, SaMey |
|           33 |     4269 | 2025-09-30 | ARCRED             | W   | 0.181      | 0.435        | -                | 0.942 (0.074)    | -         |     2.03 | bajmi, moonwalk, olimp, reiko, SaMey |
|           32 |     4287 | 2025-09-30 | Sashi              | W   | 0.179      | -            | -                | -                | -         |     3.44 | bajmi, moonwalk, olimp, reiko, SaMey |
|           31 |     4313 | 2025-09-29 | SIXSEVEN           | W   | 0.174      | -            | -                | -                | -         |     0.84 | bajmi, moonwalk, olimp, reiko, SaMey |
|           30 |     4410 | 2025-09-27 | SIXSEVEN           | L   | 0.160      | -            | -                | -                | -         |    -4.29 | bajmi, moonwalk, olimp, reiko, SaMey |
|           29 |     4431 | 2025-09-27 | Johnny Speeds      | L   | 0.159      | -            | -                | -                | -         |    -1.94 | bajmi, moonwalk, olimp, reiko, SaMey |
|           28 |     4439 | 2025-09-27 | FUT                | W   | 0.158      | 0.354        | 0.369 (0.021)    | -                | 1 (0.158) |     4.49 | bajmi, moonwalk, olimp, reiko, SaMey |
|           27 |     4447 | 2025-09-26 | Nemesis            | W   | 0.154      | -            | -                | -                | 1 (0.154) |     0.62 | bajmi, moonwalk, olimp, reiko, SaMey |
|           26 |     4459 | 2025-09-26 | MOUZ NXT           | W   | 0.153      | -            | -                | -                | -         |     3.50 | bajmi, moonwalk, olimp, reiko, SaMey |
|           25 |     4489 | 2025-09-26 | Phantom            | L   | 0.151      | -            | -                | -                | -         |    -4.46 | bajmi, moonwalk, olimp, reiko, SaMey |
|           24 |     4571 | 2025-09-23 | magic              | L   | 0.132      | -            | -                | -                | -         |    -2.38 | bajmi, moonwalk, olimp, reiko, SaMey |
|           23 |     4578 | 2025-09-22 | BC.Game            | L   | 0.127      | -            | -                | -                | -         |    -3.54 | bajmi, moonwalk, olimp, reiko, SaMey |
|           22 |     4581 | 2025-09-22 | BIG                | W   | 0.127      | 0.486        | 0.142 (0.009)    | -                | -         |     3.06 | bajmi, moonwalk, olimp, reiko, SaMey |
|           21 |     4596 | 2025-09-21 | HOTU               | L   | 0.121      | -            | -                | -                | -         |    -0.79 | bajmi, moonwalk, olimp, reiko, SaMey |
|           20 |     4602 | 2025-09-21 | BetBoom            | W   | 0.120      | 0.435        | 0.157 (0.008)    | -                | -         |     3.17 | bajmi, moonwalk, olimp, reiko, SaMey |
|           19 |     4610 | 2025-09-21 | BIG                | W   | 0.119      | -            | -                | -                | -         |     2.92 | bajmi, moonwalk, olimp, reiko, SaMey |
|           18 |     4631 | 2025-09-20 | 9INE               | W   | 0.114      | -            | -                | -                | -         |     2.64 | bajmi, moonwalk, olimp, reiko, SaMey |
|           17 |     4650 | 2025-09-20 | Inner Circle       | W   | 0.111      | -            | -                | -                | -         |     1.63 | bajmi, moonwalk, olimp, reiko, SaMey |
|           16 |     4659 | 2025-09-19 | fnatic             | W   | 0.107      | -            | -                | -                | -         |     2.41 | bajmi, moonwalk, olimp, reiko, SaMey |
|           15 |     4671 | 2025-09-19 | FORZE Reload       | W   | 0.106      | -            | -                | -                | -         |     0.58 | bajmi, moonwalk, olimp, reiko, SaMey |
|           14 |     4698 | 2025-09-18 | FUT                | W   | 0.101      | 0.384        | 0.369 (0.014)    | -                | -         |     2.90 | bajmi, moonwalk, olimp, reiko, SaMey |
|           13 |     4703 | 2025-09-18 | CPH Wolves         | W   | 0.100      | -            | -                | -                | -         |     0.32 | bajmi, moonwalk, olimp, reiko, SaMey |
|           12 |     4714 | 2025-09-18 | JiJieHao           | W   | 0.098      | -            | -                | -                | -         |     0.84 | bajmi, moonwalk, olimp, reiko, SaMey |
|           11 |     4736 | 2025-09-17 | Nexus              | W   | 0.094      | -            | -                | -                | -         |     1.26 | bajmi, moonwalk, olimp, reiko, SaMey |
|           10 |     4742 | 2025-09-17 | JiJieHao           | W   | 0.093      | -            | -                | -                | -         |     0.81 | bajmi, moonwalk, olimp, reiko, SaMey |
|            9 |     4799 | 2025-09-15 | AaB                | W   | 0.079      | -            | -                | -                | -         |     0.21 | bajmi, moonwalk, olimp, reiko, SaMey |
|            8 |     4817 | 2025-09-14 | CYBERSHOKE         | W   | 0.074      | -            | -                | -                | -         |     0.07 | bajmi, moonwalk, olimp, reiko, SaMey |
|            7 |     4864 | 2025-09-13 | BC.Game            | L   | 0.067      | -            | -                | -                | -         |    -1.86 | bajmi, moonwalk, olimp, reiko, SaMey |
|            6 |     4925 | 2025-09-12 | RUBY               | L   | 0.060      | -            | -                | -                | -         |    -1.67 | bajmi, moonwalk, olimp, reiko, SaMey |
|            5 |     4941 | 2025-09-12 | Nemesis            | W   | 0.058      | -            | -                | -                | -         |     1.32 | bajmi, moonwalk, olimp, reiko, SaMey |
|            4 |     4972 | 2025-09-11 | Nemiga             | W   | 0.054      | -            | -                | -                | -         |     1.23 | bajmi, moonwalk, olimp, reiko, SaMey |
|            3 |     5073 | 2025-09-09 | Nexus              | W   | 0.040      | -            | -                | -                | -         |     0.54 | bajmi, moonwalk, olimp, reiko, SaMey |
|            2 |     5098 | 2025-09-09 | AaB                | W   | 0.038      | -            | -                | -                | -         |     0.11 | bajmi, moonwalk, olimp, reiko, SaMey |
|            1 |     5229 | 2025-09-04 | BIG                | L   | 0.006      | -            | -                | -                | -         |    -0.04 | bajmi, moonwalk, olimp, reiko, SaMey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,412.92)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-18 |      0.914 | $7,500.00      | $6,858.18       |
| 2025-12-21 |      0.727 | $1,675.00      | $1,217.78       |
| 2025-10-20 |      0.314 | $12,000.00     | $3,765.92       |
| 2025-10-12 |      0.260 | $5,000.00      | $1,301.94       |
| 2025-10-09 |      0.239 | $25,000.00     | $5,968.87       |
| 2025-10-01 |      0.187 | $5,000.00      | $937.03         |
| 2025-09-24 |      0.141 | $2,928.00      | $412.04         |
| 2025-09-23 |      0.134 | $2,250.00      | $301.84         |
| 2025-09-21 |      0.120 | $22,000.00     | $2,649.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

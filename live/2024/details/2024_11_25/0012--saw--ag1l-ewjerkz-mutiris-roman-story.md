### Roster Details<br />
Team Name: SAW<br />
Roster: Ag1l, ewjerkz, MUTiRiS, roman, story<br />
Global Rank: [12](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [10]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  1511.7<br />
<br />
Final Rank Value (1511.7) = Starting Rank Value (1624.5) + Head To Head Adjustments (-112.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.644[<sup>1</sup>](#table2)
- Bounty Collected: 0.557[<sup>2</sup>](#table1)
- Opponent Network: 0.286[<sup>2</sup>](#table1)
- LAN Wins: 0.960[<sup>2</sup>](#table1)

The average of these factors is 0.612<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1624.5
- 400 + ( ( 0.612 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 1624.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |      122 | 2024-11-19 | BetBoom       | L   | 1.000      | -            | -                | -                | -         |   -25.55 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           60 |      131 | 2024-11-18 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |    -4.51 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           59 |      144 | 2024-11-17 | Falcons       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.24 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           58 |      156 | 2024-11-17 | UNiTY         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.29 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           57 |      169 | 2024-11-16 | SINNERS       | L   | 1.000      | -            | -                | -                | -         |   -28.80 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           56 |      629 | 2024-10-27 | B8            | W   | 1.000      | 0.500        | 0.168 (0.084)    | 0.811 (0.405)    | 1 (1.000) |     7.33 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           55 |      638 | 2024-10-27 | Monte         | W   | 1.000      | 0.500        | -                | 0.756 (0.378)    | 1 (1.000) |     3.29 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           54 |      683 | 2024-10-25 | B8            | W   | 0.994      | 0.500        | 0.168 (0.083)    | 0.811 (0.403)    | 1 (0.994) |     6.35 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           53 |      692 | 2024-10-25 | Falcons       | W   | 0.993      | 0.500        | 0.114 (0.057)    | -                | 1 (0.993) |     5.02 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           52 |      799 | 2024-10-18 | 3DMAX         | L   | 0.949      | -            | -                | -                | -         |   -19.96 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           51 |      823 | 2024-10-17 | 9 Pandas      | W   | 0.942      | 0.500        | -                | 0.892 (0.420)    | -         |     3.19 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           50 |      857 | 2024-10-16 | Sangal        | L   | 0.935      | -            | -                | -                | -         |   -19.29 | Ag1l, ewjerkz, MUTiRiS, roman, story      |
|           49 |     1064 | 2024-10-06 | BIG           | L   | 0.868      | -            | -                | -                | -         |   -19.90 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           48 |     1091 | 2024-10-05 | BetBoom       | W   | 0.863      | 0.500        | 0.116 (0.050)    | 0.519 (0.224)    | 1 (0.863) |     3.35 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           47 |     1131 | 2024-10-04 | FlyQuest      | L   | 0.855      | -            | -                | -                | -         |   -21.95 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           46 |     1140 | 2024-10-04 | Rooster       | W   | 0.854      | -            | -                | -                | 1 (0.854) |     0.20 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           45 |     1314 | 2024-09-29 | 3DMAX         | W   | 0.821      | 0.143        | 0.396 (0.046)    | -                | -         |     8.21 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           44 |     1344 | 2024-09-28 | 9z            | W   | 0.815      | -            | -                | -                | -         |     2.44 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           43 |     1350 | 2024-09-28 | Nemiga        | W   | 0.814      | 0.143        | 0.478 (0.056)    | -                | -         |     4.78 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           42 |     1387 | 2024-09-27 | B8            | L   | 0.808      | -            | -                | -                | -         |   -22.59 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           41 |     1397 | 2024-09-27 | Apogee        | W   | 0.807      | -            | -                | -                | -         |     0.39 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           40 |     1908 | 2024-09-12 | Insilio       | L   | 0.707      | -            | -                | -                | -         |   -21.74 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           39 |     1973 | 2024-09-10 | TSM           | W   | 0.693      | 0.500        | -                | 0.616 (0.214)    | -         |     0.73 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           38 |     2232 | 2024-08-31 | GUN5          | W   | 0.628      | -            | -                | -                | -         |     0.63 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           37 |     2245 | 2024-08-30 | GUN5          | W   | 0.622      | -            | -                | -                | -         |     0.59 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           36 |     2279 | 2024-08-29 | GamerLegion   | W   | 0.615      | -            | -                | -                | -         |     1.58 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           35 |     2292 | 2024-08-29 | GenOne        | W   | 0.614      | -            | -                | -                | -         |     0.12 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           34 |     2607 | 2024-08-22 | Permitta      | W   | 0.566      | -            | -                | -                | -         |     1.33 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           33 |     2643 | 2024-08-21 | Qiang         | W   | 0.561      | -            | -                | -                | -         |     0.12 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           32 |     2685 | 2024-08-21 | OG            | W   | 0.559      | -            | -                | -                | -         |     0.55 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           31 |     2794 | 2024-08-17 | Vitality      | L   | 0.534      | -            | -                | -                | -         |    -3.72 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           30 |     2808 | 2024-08-16 | FaZe          | W   | 0.528      | 1.000        | 0.329 (0.173)    | 0.325 (0.171)    | 1 (0.528) |     8.49 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           29 |     2896 | 2024-08-13 | Natus Vincere | L   | 0.507      | -            | -                | -                | -         |    -3.01 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           28 |     2946 | 2024-08-12 | Sashi         | W   | 0.501      | -            | -                | -                | -         |     0.60 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           27 |     2972 | 2024-08-11 | The MongolZ   | W   | 0.494      | 1.000        | 1.000 (0.494)    | 0.593 (0.293)    | 1 (0.494) |    11.63 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           26 |     2994 | 2024-08-10 | G2            | W   | 0.487      | 1.000        | 1.000 (0.487)    | 0.373 (0.182)    | -         |    13.74 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           25 |     3050 | 2024-08-08 | BIG           | W   | 0.474      | -            | -                | -                | -         |     4.85 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           24 |     3104 | 2024-08-07 | The MongolZ   | W   | 0.466      | 0.143        | 1.000 (0.067)    | -                | -         |    11.37 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           23 |     3357 | 2024-07-31 | Apogee        | W   | 0.421      | -            | -                | -                | -         |     0.15 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           22 |     3469 | 2024-07-28 | fnatic        | L   | 0.400      | -            | -                | -                | -         |   -10.39 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           21 |     3484 | 2024-07-27 | Passion UA    | W   | 0.396      | 0.435        | -                | 1.000 (0.172)    | -         |     1.07 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           20 |     3559 | 2024-07-25 | BC.Game       | W   | 0.380      | -            | -                | -                | -         |     0.13 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           19 |     3585 | 2024-07-24 | Rebels        | L   | 0.374      | -            | -                | -                | -         |   -11.53 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           18 |     3747 | 2024-07-19 | RUSH B        | W   | 0.341      | -            | -                | -                | -         |     0.12 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           17 |     3856 | 2024-07-17 | Sangal        | W   | 0.329      | -            | -                | -                | -         |     2.48 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           16 |     3969 | 2024-07-15 | SINNERS       | W   | 0.315      | -            | -                | -                | -         |     1.01 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           15 |     4309 | 2024-06-13 | Astralis      | L   | 0.100      | -            | -                | -                | -         |    -1.98 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           14 |     4335 | 2024-06-12 | FaZe          | L   | 0.093      | -            | -                | -                | -         |    -1.32 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           13 |     4375 | 2024-06-10 | 3DMAX         | L   | 0.080      | -            | -                | -                | -         |    -1.44 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           12 |     4384 | 2024-06-10 | RUSH B        | W   | 0.080      | -            | -                | -                | -         |     0.03 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           11 |     4387 | 2024-06-10 | Aurora        | W   | 0.079      | -            | -                | -                | -         |     0.14 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           10 |     4423 | 2024-06-09 | SINNERS       | L   | 0.074      | -            | -                | -                | -         |    -2.08 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            9 |     4430 | 2024-06-09 | Monte         | W   | 0.073      | -            | -                | -                | -         |     0.01 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            8 |     4435 | 2024-06-09 | 9 Pandas      | L   | 0.073      | -            | -                | -                | -         |    -2.12 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            7 |     4443 | 2024-06-09 | PARIVISION    | W   | 0.073      | -            | -                | -                | -         |     0.08 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            6 |     4652 | 2024-06-05 | Sangal        | L   | 0.049      | -            | -                | -                | -         |    -1.19 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            5 |     4707 | 2024-06-04 | RUSH B        | L   | 0.041      | -            | -                | -                | -         |    -1.29 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            4 |     4756 | 2024-06-02 | Zero Tenacity | L   | 0.028      | -            | -                | -                | -         |    -0.83 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            3 |     4823 | 2024-05-31 | Sangal        | W   | 0.014      | -            | -                | -                | -         |     0.10 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            2 |     4829 | 2024-05-31 | fnatic        | L   | 0.014      | -            | -                | -                | -         |    -0.37 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            1 |     4832 | 2024-05-31 | FAVBET        | W   | 0.013      | -            | -                | -                | -         |     0.01 | arrozdoce, ewjerkz, MUTiRiS, roman, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($112,003.08)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.28) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-10-20 |      0.961 | $6,500.00      | $6,245.41       |
| 2024-10-06 |      0.870 | $10,000.00     | $8,696.58       |
| 2024-08-18 |      0.542 | $80,000.00     | $43,352.28      |
| 2024-07-28 |      0.402 | $5,000.00      | $2,008.09       |
| 2024-06-16 |      0.121 | $10,000.00     | $1,212.04       |
| 2024-06-09 |      0.075 | $6,500.00      | $488.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

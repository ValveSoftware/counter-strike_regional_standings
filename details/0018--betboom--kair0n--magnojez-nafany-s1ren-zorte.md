### Roster Details<br />
Team Name: BetBoom<br />
Roster: KaiR0N-, Magnojez, nafany, s1ren, zorte<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [18](../standings_global.md)<br />
Regional Rank: [13]( ../standings_europe.md)<br />
Final Rank Value:  1537.1<br />
<br />
Final Rank Value (1537.1) = Starting Rank Value (1648.6) + Head To Head Adjustments (-111.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.717[<sup>1</sup>](#table2)
- Bounty Collected: 0.604[<sup>2</sup>](#table1)
- Opponent Network: 0.310[<sup>2</sup>](#table1)
- LAN Wins: 0.695[<sup>2</sup>](#table1)

The average of these factors is 0.581<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1648.6
- 400 + ( ( 0.581 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1648.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           68 |      670 | 2024-06-07 | Astralis          | L   | 0.933      | -            | -                | -                | -         |    -4.16 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           67 |      737 | 2024-06-06 | Eternal Fire      | W   | 0.927      | 0.715        | 1.000 (0.663)    | 0.401 (0.266)    | 1 (0.927) |    20.11 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           66 |      749 | 2024-06-06 | Complexity        | W   | 0.926      | 0.715        | 0.445 (0.294)    | 0.412 (0.273)    | 1 (0.926) |    23.89 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           65 |      785 | 2024-06-05 | BIG               | W   | 0.921      | 0.715        | 0.212 (0.139)    | 0.382 (0.252)    | 1 (0.921) |    11.32 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           64 |      795 | 2024-06-05 | FURIA             | L   | 0.920      | -            | -                | -                | -         |   -14.37 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           63 |      807 | 2024-06-05 | fnatic            | W   | 0.919      | 0.715        | 0.300 (0.197)    | 0.632 (0.416)    | 1 (0.919) |    12.67 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           62 |     1083 | 2024-05-25 | B8                | L   | 0.847      | -            | -                | -                | -         |   -22.05 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           61 |     1109 | 2024-05-24 | DMS               | W   | 0.838      | -            | -                | -                | 0 (0.000) |     1.07 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           60 |     1198 | 2024-05-21 | Eternal Fire      | L   | 0.820      | -            | -                | -                | -         |    -6.22 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           59 |     1224 | 2024-05-20 | MIBR              | W   | 0.815      | 0.769        | 0.269 (0.168)    | 0.614 (0.385)    | -         |    15.09 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           58 |     1233 | 2024-05-20 | Astralis          | L   | 0.814      | -            | -                | -                | -         |    -2.50 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           57 |     1246 | 2024-05-20 | MIBR              | W   | 0.812      | 0.769        | 0.269 (0.168)    | 0.614 (0.383)    | -         |    15.80 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           56 |     1403 | 2024-05-15 | Falcons           | L   | 0.781      | -            | -                | -                | -         |   -10.85 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           55 |     1474 | 2024-05-14 | MOUZ              | L   | 0.773      | -            | -                | -                | -         |    -1.19 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           54 |     1513 | 2024-05-12 | B8                | L   | 0.761      | -            | -                | -                | -         |   -21.19 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           53 |     1520 | 2024-05-12 | 9 Pandas          | W   | 0.760      | -            | -                | -                | -         |     2.15 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           52 |     1552 | 2024-05-11 | Metizport         | W   | 0.753      | -            | -                | -                | -         |     1.52 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           51 |     1570 | 2024-05-10 | Enterprise        | W   | 0.746      | 0.435        | -                | 0.635 (0.206)    | -         |     0.97 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           50 |     1630 | 2024-05-07 | FlyQuest          | L   | 0.727      | -            | -                | -                | -         |   -16.24 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           49 |     1682 | 2024-05-04 | AMKAL             | L   | 0.707      | -            | -                | -                | -         |   -19.64 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           48 |     1687 | 2024-05-04 | 9 Pandas          | W   | 0.706      | -            | -                | -                | -         |     1.55 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           47 |     1710 | 2024-05-03 | Insilio           | W   | 0.698      | -            | -                | -                | -         |     1.01 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           46 |     1750 | 2024-05-01 | EYEBALLERS        | W   | 0.686      | -            | -                | -                | -         |     0.68 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           45 |     1780 | 2024-04-30 | 3DMAX             | L   | 0.679      | -            | -                | -                | -         |   -17.86 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           44 |     1853 | 2024-04-26 | M80               | W   | 0.655      | 0.889        | 0.219 (0.127)    | 0.621 (0.361)    | 1 (0.655) |     3.60 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           43 |     1867 | 2024-04-26 | Falcons           | W   | 0.652      | 0.889        | 0.344 (0.200)    | -                | 1 (0.652) |    10.01 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           42 |     1891 | 2024-04-25 | Vitality          | L   | 0.646      | -            | -                | -                | -         |    -1.72 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           41 |     1922 | 2024-04-23 | M80               | W   | 0.634      | 0.889        | 0.219 (0.123)    | 0.621 (0.350)    | 1 (0.634) |     3.39 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           40 |     2026 | 2024-04-19 | Cloud9            | L   | 0.608      | -            | -                | -                | -         |   -16.39 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           39 |     2041 | 2024-04-19 | Eternal Fire      | L   | 0.606      | -            | -                | -                | -         |    -5.16 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           38 |     2068 | 2024-04-18 | Apeks             | W   | 0.601      | -            | -                | -                | -         |     1.09 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           37 |     2073 | 2024-04-18 | brazylijski luz   | W   | 0.600      | -            | -                | -                | -         |     0.37 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           36 |     2078 | 2024-04-18 | Serbia            | W   | 0.600      | -            | -                | -                | -         |     0.27 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           35 |     2195 | 2024-04-14 | 3DMAX             | W   | 0.573      | 0.358        | -                | 1.000 (0.205)    | -         |     2.30 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           34 |     2202 | 2024-04-13 | OG                | L   | 0.568      | -            | -                | -                | -         |   -16.07 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           33 |     2207 | 2024-04-13 | Aurora            | L   | 0.567      | -            | -                | -                | -         |    -7.74 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           32 |     2214 | 2024-04-13 | Sampi             | W   | 0.565      | -            | -                | -                | -         |     0.60 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           31 |     2241 | 2024-04-11 | Aurora            | L   | 0.555      | -            | -                | -                | -         |    -7.97 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           30 |     2249 | 2024-04-11 | Ninjas in Pyjamas | W   | 0.553      | 0.684        | 0.343 (0.130)    | -                | -         |    12.99 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           29 |     2254 | 2024-04-11 | AMKAL             | L   | 0.553      | -            | -                | -                | -         |   -16.33 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           28 |     2295 | 2024-04-10 | Aurora            | W   | 0.547      | -            | -                | -                | -         |     9.47 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           27 |     2350 | 2024-04-09 | BIG               | W   | 0.540      | -            | -                | -                | -         |     3.97 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           26 |     2425 | 2024-04-06 | Alliance          | W   | 0.519      | -            | -                | -                | -         |     0.37 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           25 |     2439 | 2024-04-05 | BLEED             | W   | 0.514      | -            | -                | -                | -         |     0.95 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           24 |     2477 | 2024-04-04 | Alliance          | W   | 0.507      | -            | -                | -                | -         |     0.38 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           23 |     2489 | 2024-04-04 | BLEED             | W   | 0.506      | -            | -                | -                | -         |     0.92 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           22 |     2658 | 2024-03-27 | FAVBET            | L   | 0.454      | -            | -                | -                | -         |   -14.14 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           21 |     2695 | 2024-03-24 | FORZE             | L   | 0.433      | -            | -                | -                | -         |   -13.18 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           20 |     2710 | 2024-03-23 | fnatic            | W   | 0.426      | -            | -                | -                | -         |     6.19 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           19 |     2749 | 2024-03-21 | B8                | W   | 0.413      | -            | -                | -                | -         |     0.99 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           18 |     3145 | 2024-03-05 | BLEED             | L   | 0.306      | -            | -                | -                | -         |    -9.19 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           17 |     3163 | 2024-03-04 | Gaimin Gladiators | W   | 0.299      | -            | -                | -                | -         |     0.54 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           16 |     3178 | 2024-03-03 | ex-Preasy         | L   | 0.294      | -            | -                | -                | -         |    -9.12 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           15 |     3182 | 2024-03-03 | ex-Sprout         | W   | 0.294      | -            | -                | -                | -         |     0.02 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           14 |     3222 | 2024-03-01 | ex-Preasy         | W   | 0.281      | -            | -                | -                | -         |     0.13 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           13 |     3254 | 2024-02-28 | ALTERNATE aTTaX   | W   | 0.266      | -            | -                | -                | -         |     0.33 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           12 |     3361 | 2024-02-23 | ex-Guild Eagles   | L   | 0.233      | -            | -                | -                | -         |    -7.21 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           11 |     3500 | 2024-02-17 | Eternal Fire      | L   | 0.194      | -            | -                | -                | -         |    -2.35 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           10 |     3524 | 2024-02-16 | Natus Vincere     | L   | 0.187      | -            | -                | -                | -         |    -1.17 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            9 |     3562 | 2024-02-15 | Enterprise        | W   | 0.179      | -            | -                | -                | 1 (0.179) |     0.16 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            8 |     3597 | 2024-02-14 | Into the Breach   | W   | 0.173      | -            | -                | -                | 1 (0.173) |     0.03 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            7 |     3600 | 2024-02-14 | fnatic            | L   | 0.173      | -            | -                | -                | -         |    -2.91 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            6 |     3683 | 2024-02-08 | FORZE             | L   | 0.135      | -            | -                | -                | -         |    -4.15 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            5 |     3689 | 2024-02-08 | Nemiga            | L   | 0.133      | -            | -                | -                | -         |    -3.71 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            4 |     3818 | 2024-02-01 | Cloud9            | L   | 0.087      | -            | -                | -                | -         |    -2.54 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            3 |     3845 | 2024-01-31 | Eternal Fire      | L   | 0.080      | -            | -                | -                | -         |    -1.01 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            2 |     4063 | 2024-01-20 | OG                | W   | 0.007      | -            | -                | -                | -         |     0.01 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            1 |     4117 | 2024-01-19 | Cloud9            | L   | 0.000      | -            | -                | -                | -         |    -0.01 | danistzz, KaiR0N-, nafany, s1ren, zorte |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($98,944.27)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.40) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.947 | $20,000.00     | $18,939.44      |
| 2024-05-26 |      0.854 | $2,000.00      | $1,707.24       |
| 2024-05-23 |      0.834 | $12,500.00     | $10,421.96      |
| 2024-05-12 |      0.761 | $10,000.00     | $7,606.85       |
| 2024-05-12 |      0.760 | $17,500.00     | $13,304.29      |
| 2024-05-04 |      0.707 | $10,000.00     | $7,069.54       |
| 2024-05-02 |      0.694 | $1,000.00      | $693.85         |
| 2024-04-14 |      0.574 | $52,500.00     | $30,120.35      |
| 2024-04-14 |      0.573 | $9,000.00      | $5,157.73       |
| 2024-03-06 |      0.314 | $12,500.00     | $3,923.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

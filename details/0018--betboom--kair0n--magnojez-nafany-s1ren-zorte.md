### Roster Details<br />
Team Name: BetBoom<br />
Roster: KaiR0N-, Magnojez, nafany, s1ren, zorte<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [18](../standings_global.md)<br />
Regional Rank: [13]( ../standings_europe.md)<br />
Final Rank Value:  1545.7<br />
<br />
Final Rank Value (1545.7) = Starting Rank Value (1666.9) + Head To Head Adjustments (-121.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.718[<sup>1</sup>](#table2)
- Bounty Collected: 0.612[<sup>2</sup>](#table1)
- Opponent Network: 0.338[<sup>2</sup>](#table1)
- LAN Wins: 0.735[<sup>2</sup>](#table1)

The average of these factors is 0.601<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1666.9
- 400 + ( ( 0.601 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1666.9


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
|           70 |      506 | 2024-06-07 | Astralis          | L   | 0.973      | -            | -                | -                | -         |    -4.30 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           69 |      573 | 2024-06-06 | Eternal Fire      | W   | 0.966      | 0.715        | 1.000 (0.691)    | 0.430 (0.297)    | 1 (0.966) |    21.13 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           68 |      585 | 2024-06-06 | Complexity        | W   | 0.965      | 0.715        | 0.440 (0.304)    | 0.427 (0.295)    | 1 (0.965) |    24.45 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           67 |      621 | 2024-06-05 | BIG               | W   | 0.960      | 0.715        | 0.215 (0.148)    | 0.405 (0.278)    | 1 (0.960) |    12.30 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           66 |      631 | 2024-06-05 | FURIA             | L   | 0.960      | -            | -                | -                | -         |   -15.06 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           65 |      643 | 2024-06-05 | fnatic            | W   | 0.959      | 0.715        | 0.298 (0.205)    | 0.623 (0.427)    | 1 (0.959) |    12.79 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           64 |      919 | 2024-05-25 | B8                | L   | 0.886      | -            | -                | -                | -         |   -22.87 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           63 |      945 | 2024-05-24 | DMS               | W   | 0.878      | -            | -                | -                | 0 (0.000) |     1.07 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           62 |     1034 | 2024-05-21 | Eternal Fire      | L   | 0.860      | -            | -                | -                | -         |    -6.26 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           61 |     1060 | 2024-05-20 | MIBR              | W   | 0.855      | 0.769        | 0.270 (0.178)    | 0.648 (0.425)    | -         |    15.83 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           60 |     1069 | 2024-05-20 | Astralis          | L   | 0.853      | -            | -                | -                | -         |    -2.53 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           59 |     1082 | 2024-05-20 | MIBR              | W   | 0.851      | 0.769        | 0.270 (0.177)    | 0.648 (0.424)    | -         |    16.60 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           58 |     1239 | 2024-05-15 | Falcons           | L   | 0.820      | -            | -                | -                | -         |   -10.80 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           57 |     1310 | 2024-05-14 | MOUZ              | L   | 0.813      | -            | -                | -                | -         |    -1.59 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           56 |     1349 | 2024-05-12 | B8                | L   | 0.800      | -            | -                | -                | -         |   -22.16 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           55 |     1356 | 2024-05-12 | 9 Pandas          | W   | 0.799      | -            | -                | -                | -         |     2.24 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           54 |     1388 | 2024-05-11 | Metizport         | W   | 0.792      | -            | -                | -                | -         |     1.61 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           53 |     1406 | 2024-05-10 | Enterprise        | W   | 0.785      | 0.435        | -                | 0.654 (0.223)    | -         |     0.99 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           52 |     1466 | 2024-05-07 | FlyQuest          | L   | 0.766      | -            | -                | -                | -         |   -16.95 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           51 |     1518 | 2024-05-04 | AMKAL             | L   | 0.747      | -            | -                | -                | -         |   -20.50 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           50 |     1523 | 2024-05-04 | 9 Pandas          | W   | 0.746      | -            | -                | -                | -         |     1.61 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           49 |     1546 | 2024-05-03 | Insilio           | W   | 0.738      | -            | -                | -                | -         |     1.01 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           48 |     1586 | 2024-05-01 | EYEBALLERS        | W   | 0.726      | -            | -                | -                | -         |     0.68 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           47 |     1616 | 2024-04-30 | 3DMAX             | L   | 0.718      | -            | -                | -                | -         |   -18.88 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           46 |     1689 | 2024-04-26 | M80               | W   | 0.694      | 0.889        | 0.218 (0.135)    | 0.649 (0.400)    | 1 (0.694) |     3.07 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           45 |     1703 | 2024-04-26 | Falcons           | W   | 0.692      | 0.889        | 0.352 (0.216)    | -                | 1 (0.692) |    11.08 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           44 |     1727 | 2024-04-25 | Vitality          | L   | 0.686      | -            | -                | -                | -         |    -2.13 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           43 |     1758 | 2024-04-23 | M80               | W   | 0.674      | 0.889        | 0.218 (0.131)    | 0.649 (0.388)    | 1 (0.674) |     2.86 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           42 |     1862 | 2024-04-19 | Cloud9            | L   | 0.647      | -            | -                | -                | -         |   -17.01 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           41 |     1877 | 2024-04-19 | Eternal Fire      | L   | 0.646      | -            | -                | -                | -         |    -5.28 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           40 |     1904 | 2024-04-18 | Apeks             | W   | 0.641      | -            | -                | -                | -         |     1.22 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           39 |     1909 | 2024-04-18 | brazylijski luz   | W   | 0.640      | -            | -                | -                | -         |     0.34 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           38 |     1914 | 2024-04-18 | Serbia            | W   | 0.640      | -            | -                | -                | -         |     0.25 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           37 |     2031 | 2024-04-14 | 3DMAX             | W   | 0.613      | 0.358        | -                | 1.000 (0.220)    | -         |     2.33 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           36 |     2038 | 2024-04-13 | OG                | L   | 0.607      | -            | -                | -                | -         |   -17.09 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           35 |     2043 | 2024-04-13 | Aurora            | L   | 0.606      | -            | -                | -                | -         |    -8.66 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           34 |     2050 | 2024-04-13 | Slovakia          | W   | 0.605      | -            | -                | -                | -         |     0.58 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           33 |     2077 | 2024-04-11 | Aurora            | L   | 0.594      | -            | -                | -                | -         |    -8.97 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           32 |     2085 | 2024-04-11 | Ninjas in Pyjamas | W   | 0.593      | 0.684        | 0.340 (0.138)    | -                | -         |    13.35 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           31 |     2090 | 2024-04-11 | AMKAL             | L   | 0.592      | -            | -                | -                | -         |   -17.49 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           30 |     2131 | 2024-04-10 | Aurora            | W   | 0.586      | -            | -                | -                | -         |     9.67 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           29 |     2186 | 2024-04-09 | BIG               | W   | 0.580      | -            | -                | -                | -         |     4.31 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           28 |     2261 | 2024-04-06 | Alliance          | W   | 0.559      | -            | -                | -                | -         |     0.37 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           27 |     2275 | 2024-04-05 | BLEED             | W   | 0.553      | -            | -                | -                | -         |     3.76 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           26 |     2313 | 2024-04-04 | Alliance          | W   | 0.547      | -            | -                | -                | -         |     0.38 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           25 |     2325 | 2024-04-04 | BLEED             | W   | 0.545      | -            | -                | -                | -         |     3.81 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           24 |     2494 | 2024-03-27 | FAVBET            | L   | 0.493      | -            | -                | -                | -         |   -15.39 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           23 |     2531 | 2024-03-24 | FORZE             | L   | 0.473      | -            | -                | -                | -         |   -14.39 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           22 |     2546 | 2024-03-23 | fnatic            | W   | 0.465      | -            | -                | -                | -         |     6.52 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           21 |     2585 | 2024-03-21 | B8                | W   | 0.452      | -            | -                | -                | -         |     1.05 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           20 |     2981 | 2024-03-05 | BLEED             | L   | 0.346      | -            | -                | -                | -         |    -8.70 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           19 |     2999 | 2024-03-04 | Gaimin Gladiators | W   | 0.338      | -            | -                | -                | -         |     0.70 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           18 |     3014 | 2024-03-03 | ex-Preasy         | L   | 0.333      | -            | -                | -                | -         |   -10.34 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           17 |     3018 | 2024-03-03 | ex-Sprout         | W   | 0.333      | -            | -                | -                | -         |     0.03 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           16 |     3058 | 2024-03-01 | ex-Preasy         | W   | 0.321      | -            | -                | -                | -         |     0.15 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           15 |     3090 | 2024-02-28 | ALTERNATE aTTaX   | W   | 0.306      | -            | -                | -                | -         |     0.34 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           14 |     3197 | 2024-02-23 | ex-Guild Eagles   | L   | 0.272      | -            | -                | -                | -         |    -8.44 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           13 |     3336 | 2024-02-17 | Eternal Fire      | L   | 0.233      | -            | -                | -                | -         |    -2.75 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           12 |     3360 | 2024-02-16 | Natus Vincere     | L   | 0.227      | -            | -                | -                | -         |    -1.40 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           11 |     3398 | 2024-02-15 | Enterprise        | W   | 0.219      | -            | -                | -                | 1 (0.219) |     0.18 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           10 |     3433 | 2024-02-14 | Into the Breach   | W   | 0.213      | -            | -                | -                | 1 (0.213) |     0.03 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            9 |     3436 | 2024-02-14 | fnatic            | L   | 0.212      | -            | -                | -                | -         |    -3.69 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            8 |     3519 | 2024-02-08 | FORZE             | L   | 0.174      | -            | -                | -                | -         |    -5.38 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            7 |     3525 | 2024-02-08 | Nemiga            | L   | 0.173      | -            | -                | -                | -         |    -4.84 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            6 |     3654 | 2024-02-01 | Cloud9            | L   | 0.127      | -            | -                | -                | -         |    -3.67 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            5 |     3681 | 2024-01-31 | Eternal Fire      | L   | 0.119      | -            | -                | -                | -         |    -1.50 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            4 |     3899 | 2024-01-20 | OG                | W   | 0.046      | -            | -                | -                | -         |     0.08 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            3 |     3953 | 2024-01-19 | Cloud9            | L   | 0.040      | -            | -                | -                | -         |    -1.15 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            2 |     4012 | 2024-01-18 | BIG               | W   | 0.033      | -            | -                | -                | -         |     0.20 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            1 |     4020 | 2024-01-18 | Zero Tenacity     | W   | 0.033      | -            | -                | -                | -         |     0.04 | danistzz, KaiR0N-, nafany, s1ren, zorte |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($104,766.98)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.41) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.987 | $20,000.00     | $19,731.64      |
| 2024-05-26 |      0.893 | $2,000.00      | $1,786.46       |
| 2024-05-23 |      0.873 | $12,500.00     | $10,917.09      |
| 2024-05-12 |      0.800 | $10,000.00     | $8,002.95       |
| 2024-05-12 |      0.800 | $17,500.00     | $13,997.47      |
| 2024-05-04 |      0.747 | $10,000.00     | $7,465.64       |
| 2024-05-02 |      0.733 | $1,000.00      | $733.46         |
| 2024-04-14 |      0.613 | $52,500.00     | $32,199.89      |
| 2024-04-14 |      0.613 | $9,000.00      | $5,514.23       |
| 2024-03-06 |      0.353 | $12,500.00     | $4,418.14       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

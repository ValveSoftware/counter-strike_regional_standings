### Roster Details<br />
Team Name: 3DMAX<br />
Roster: Djoko, Ex3rcice, Graviti, Lucky, Maka<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [39](../standings_global.md)<br />
Regional Rank: [28]( ../standings_europe.md)<br />
Final Rank Value:  1215.1<br />
<br />
Final Rank Value (1215.1) = Starting Rank Value (1248.9) + Head To Head Adjustments (-33.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.592[<sup>1</sup>](#table2)
- Bounty Collected: 0.499[<sup>2</sup>](#table1)
- Opponent Network: 0.337[<sup>2</sup>](#table1)
- LAN Wins: 0.182[<sup>2</sup>](#table1)

The average of these factors is 0.402<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1248.9
- 400 + ( ( 0.402 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1248.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           77 |       58 | 2024-07-08 | Latvia            | L   | 1.000      | -            | -                | -                | -         |   -27.01 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           76 |      139 | 2024-06-17 | 5W                | L   | 1.000      | -            | -                | -                | -         |   -22.79 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           75 |      153 | 2024-06-16 | B8                | L   | 1.000      | -            | -                | -                | -         |   -17.96 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           74 |      160 | 2024-06-16 | Permitta          | W   | 1.000      | 0.435        | -                | 0.837 (0.364)    | 0 (0.000) |     5.26 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           73 |      165 | 2024-06-16 | Enterprise        | W   | 1.000      | 0.450        | -                | 0.654 (0.294)    | 0 (0.000) |     5.48 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           72 |      180 | 2024-06-15 | GUN5              | W   | 1.000      | 0.435        | 0.109 (0.047)    | -                | 0 (0.000) |     6.96 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           71 |      198 | 2024-06-15 | BLEED             | W   | 1.000      | 0.143        | 0.348 (0.050)    | -                | 0 (0.000) |    17.43 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           70 |      231 | 2024-06-14 | Sashi             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.57 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           69 |      244 | 2024-06-14 | Passion UA        | W   | 1.000      | 0.435        | -                | 0.821 (0.357)    | 0 (0.000) |     8.89 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           68 |      257 | 2024-06-13 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.33 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           67 |      275 | 2024-06-13 | VP.Prodigy        | W   | 1.000      | -            | -                | -                | -         |     5.36 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           66 |      306 | 2024-06-11 | SINNERS           | W   | 1.000      | -            | -                | -                | -         |     8.57 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           65 |      317 | 2024-06-11 | BUHAWI            | W   | 0.999      | -            | -                | -                | -         |     0.34 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           64 |      333 | 2024-06-10 | EYEBALLERS        | W   | 0.993      | 0.450        | -                | 0.646 (0.289)    | -         |     5.61 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           63 |      340 | 2024-06-10 | SAW               | W   | 0.992      | -            | -                | -                | -         |    17.86 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           62 |      347 | 2024-06-10 | PARIVISION        | W   | 0.992      | -            | -                | -                | -         |    10.47 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           61 |      351 | 2024-06-10 | 9 Pandas          | W   | 0.991      | -            | -                | -                | -         |    14.29 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           60 |      374 | 2024-06-09 | 9INE              | L   | 0.987      | -            | -                | -                | -         |   -27.14 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           59 |      389 | 2024-06-09 | Monte             | L   | 0.986      | -            | -                | -                | -         |   -15.88 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           58 |      397 | 2024-06-09 | SINNERS           | L   | 0.985      | -            | -                | -                | -         |   -22.25 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           57 |      402 | 2024-06-09 | Aurora            | W   | 0.985      | 0.143        | 0.518 (0.073)    | -                | -         |    24.21 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           56 |      411 | 2024-06-09 | RUSH B            | W   | 0.985      | -            | -                | -                | -         |     4.79 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           55 |      446 | 2024-06-08 | Illuminar         | L   | 0.980      | -            | -                | -                | -         |   -24.81 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           54 |      505 | 2024-06-07 | Gaimin Gladiators | W   | 0.973      | 0.450        | -                | 0.528 (0.231)    | -         |    11.12 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           53 |      541 | 2024-06-06 | Romania           | W   | 0.968      | -            | -                | -                | -         |     2.56 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           52 |      554 | 2024-06-06 | Sangal            | L   | 0.967      | -            | -                | -                | -         |   -16.31 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           51 |      623 | 2024-06-05 | KOI               | L   | 0.960      | -            | -                | -                | -         |   -19.08 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           50 |      669 | 2024-06-04 | Aurora            | W   | 0.954      | 0.500        | 0.518 (0.247)    | 0.853 (0.407)    | -         |    24.91 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           49 |      752 | 2024-06-01 | VP.Prodigy        | L   | 0.933      | -            | -                | -                | -         |   -23.93 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           48 |      802 | 2024-05-30 | Slovakia          | W   | 0.921      | 0.435        | -                | 0.891 (0.357)    | -         |     4.86 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           47 |      929 | 2024-05-25 | MOUZ NXT          | L   | 0.885      | -            | -                | -                | -         |   -19.74 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           46 |      954 | 2024-05-23 | Zero Tenacity     | W   | 0.873      | 0.435        | 0.153 (0.058)    | 1.000 (0.379)    | -         |     9.26 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           45 |     1166 | 2024-05-17 | B8                | L   | 0.832      | -            | -                | -                | -         |   -15.38 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           44 |     1252 | 2024-05-15 | Zero Tenacity     | L   | 0.819      | -            | -                | -                | -         |   -19.10 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           43 |     1449 | 2024-05-08 | G2                | L   | 0.773      | -            | -                | -                | -         |    -0.82 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           42 |     1590 | 2024-05-01 | Sashi             | L   | 0.725      | -            | -                | -                | -         |   -13.10 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           41 |     1616 | 2024-04-30 | BetBoom           | W   | 0.718      | 0.384        | 0.406 (0.112)    | -                | -         |    18.88 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           40 |     1623 | 2024-04-29 | PARIVISION        | W   | 0.714      | -            | -                | -                | -         |     4.67 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           39 |     1671 | 2024-04-27 | Astralis          | L   | 0.699      | -            | -                | -                | -         |    -0.57 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           38 |     1743 | 2024-04-24 | fnatic            | W   | 0.680      | 0.889        | 0.298 (0.180)    | 0.623 (0.376)    | 1 (0.680) |    17.95 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           37 |     1768 | 2024-04-23 | SAW               | W   | 0.672      | 0.889        | 0.147 (0.088)    | 0.526 (0.314)    | 1 (0.672) |    11.30 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           36 |     1778 | 2024-04-22 | ex-Guild Eagles   | W   | 0.667      | -            | -                | -                | -         |     3.38 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           35 |     1963 | 2024-04-17 | BLEED             | W   | 0.632      | 0.384        | 0.348 (0.085)    | -                | -         |    13.82 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           34 |     2031 | 2024-04-14 | BetBoom           | L   | 0.613      | -            | -                | -                | -         |    -2.33 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           33 |     2046 | 2024-04-13 | ex-Preasy         | W   | 0.606      | -            | -                | -                | -         |     3.32 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           32 |     2088 | 2024-04-11 | Passion UA        | L   | 0.593      | -            | -                | -                | -         |   -14.87 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           31 |     2122 | 2024-04-10 | SINNERS           | L   | 0.587      | -            | -                | -                | -         |   -11.71 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           30 |     2171 | 2024-04-09 | SAW               | W   | 0.581      | -            | -                | -                | -         |    10.42 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           29 |     2248 | 2024-04-07 | Young Ninjas      | W   | 0.566      | -            | -                | -                | -         |     1.72 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           28 |     2321 | 2024-04-04 | Space             | W   | 0.546      | -            | -                | -                | -         |     1.86 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           27 |     2350 | 2024-04-03 | GUN5              | W   | 0.540      | -            | -                | -                | -         |     3.36 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           26 |     2401 | 2024-04-02 | Permitta          | W   | 0.532      | -            | -                | -                | -         |     3.46 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           25 |     2456 | 2024-03-28 | Apeks             | W   | 0.500      | -            | -                | -                | -         |     4.46 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           24 |     2579 | 2024-03-21 | fnatic            | L   | 0.453      | -            | -                | -                | -         |    -1.72 | Djoko, Ex3rcice, Lucky, Maka, NBK-     |
|           23 |     2621 | 2024-03-19 | GUN5              | W   | 0.439      | -            | -                | -                | -         |     0.13 | Djoko, Ex3rcice, Lucky, Maka, NBK-     |
|           22 |     2692 | 2024-03-15 | B8                | W   | 0.413      | 0.500        | 0.242 (0.050)    | -                | -         |     5.58 | Djoko, Ex3rcice, Lucky, Maka, misutaaa |
|           21 |     2760 | 2024-03-13 | PARIVISION        | L   | 0.400      | -            | -                | -                | -         |    -9.85 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           20 |     2973 | 2024-03-05 | FORZE             | L   | 0.347      | -            | -                | -                | -         |    -8.62 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           19 |     2995 | 2024-03-04 | fnatic            | L   | 0.339      | -            | -                | -                | -         |    -1.41 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           18 |     3033 | 2024-03-02 | Monte             | W   | 0.327      | -            | -                | -                | -         |     5.91 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           17 |     3070 | 2024-02-29 | Gaimin Gladiators | W   | 0.314      | -            | -                | -                | -         |     3.71 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           16 |     3367 | 2024-02-16 | 9 Pandas          | L   | 0.226      | -            | -                | -                | -         |    -4.71 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           15 |     3392 | 2024-02-15 | Into the Breach   | W   | 0.220      | -            | -                | -                | 1 (0.220) |     0.31 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           14 |     3429 | 2024-02-14 | KOI               | L   | 0.214      | -            | -                | -                | -         |    -3.84 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           13 |     3435 | 2024-02-14 | Falcons           | L   | 0.212      | -            | -                | -                | -         |    -0.79 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           12 |     3484 | 2024-02-11 | Apeks             | L   | 0.193      | -            | -                | -                | -         |    -4.49 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           11 |     3507 | 2024-02-09 | fnatic            | W   | 0.180      | -            | -                | -                | -         |     5.07 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|           10 |     3510 | 2024-02-09 | Endpoint          | W   | 0.180      | -            | -                | -                | -         |     0.81 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            9 |     3513 | 2024-02-09 | ex-Sprout         | L   | 0.179      | -            | -                | -                | -         |    -5.52 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            8 |     3700 | 2024-01-30 | Permitta          | L   | 0.113      | -            | -                | -                | -         |    -2.96 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            7 |     3854 | 2024-01-21 | ex-sYnck          | W   | 0.054      | -            | -                | -                | -         |     0.03 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            6 |     3862 | 2024-01-21 | ex-Preasy         | L   | 0.053      | -            | -                | -                | -         |    -1.49 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            5 |     3887 | 2024-01-20 | 9 Pandas          | L   | 0.048      | -            | -                | -                | -         |    -1.03 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            4 |     3907 | 2024-01-20 | Zero Tenacity     | W   | 0.046      | -            | -                | -                | -         |     0.46 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            3 |     3961 | 2024-01-19 | OG                | L   | 0.039      | -            | -                | -                | -         |    -0.78 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            2 |     4006 | 2024-01-18 | Cloud9            | L   | 0.034      | -            | -                | -                | -         |    -0.55 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |
|            1 |     4019 | 2024-01-18 | JANO              | W   | 0.033      | -            | -                | -                | -         |     0.01 | Djoko, Ex3rcice, hAdji, Lucky, Maka    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($52,923.78)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-16 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-09 |      0.987 | $7,000.00      | $6,910.51       |
| 2024-06-02 |      0.940 | $2,000.00      | $1,879.25       |
| 2024-05-26 |      0.893 | $2,000.00      | $1,786.46       |
| 2024-05-12 |      0.800 | $23,500.00     | $18,796.60      |
| 2024-05-02 |      0.733 | $1,500.00      | $1,100.18       |
| 2024-04-14 |      0.613 | $4,000.00      | $2,450.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

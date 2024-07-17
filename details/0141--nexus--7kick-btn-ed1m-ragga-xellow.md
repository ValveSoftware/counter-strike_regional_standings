### Roster Details<br />
Team Name: Nexus<br />
Roster: 7kick, BTN, Ed1m, ragga, XELLOW<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [141](../standings_global.md)<br />
Regional Rank: [92]( ../standings_europe.md)<br />
Final Rank Value:  766.1<br />
<br />
Final Rank Value (766.1) = Starting Rank Value (875.3) + Head To Head Adjustments (-109.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.387[<sup>2</sup>](#table1)
- Opponent Network: 0.162[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.221<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 875.3
- 400 + ( ( 0.221 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 875.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |       14 | 2024-07-17 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -10.48 | 7kick, BTN, Ed1m, ragga, XELLOW      |
|           60 |       49 | 2024-07-16 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -0.19 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           59 |      108 | 2024-07-15 | SINNERS           | W   | 1.000      | 0.333        | 0.058 (0.019)    | 0.744 (0.248)    | 0 (0.000) |    25.17 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           58 |      119 | 2024-07-14 | kONO              | L   | 1.000      | -            | -                | -                | -         |    -9.14 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           57 |      139 | 2024-07-13 | Serbia            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    19.64 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           56 |      180 | 2024-07-10 | kONO              | L   | 1.000      | -            | -                | -                | -         |    -8.66 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           55 |      212 | 2024-07-09 | Belarus           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.89 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           54 |      450 | 2024-06-12 | Permitta          | L   | 0.967      | -            | -                | -                | -         |    -6.85 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           53 |      475 | 2024-06-11 | FAVBET            | L   | 0.961      | -            | -                | -                | -         |   -10.75 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           52 |      570 | 2024-06-09 | EYEBALLERS        | L   | 0.945      | -            | -                | -                | -         |    -7.70 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           51 |      600 | 2024-06-08 | Enterprise        | L   | 0.941      | -            | -                | -                | -         |    -8.06 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           50 |      673 | 2024-06-07 | Astralis Talent   | W   | 0.933      | -            | -                | -                | 0 (0.000) |     9.00 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           49 |      683 | 2024-06-07 | 9INE              | L   | 0.932      | -            | -                | -                | -         |   -13.29 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           48 |      705 | 2024-06-06 | 3DMAX             | L   | 0.928      | -            | -                | -                | -         |    -2.61 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           47 |      803 | 2024-06-05 | BLEED             | L   | 0.919      | -            | -                | -                | -         |    -1.93 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           46 |     1043 | 2024-05-27 | The Prodigies     | L   | 0.861      | -            | -                | -                | -         |   -21.59 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           45 |     1054 | 2024-05-27 | MOUZ NXT          | L   | 0.858      | -            | -                | -                | -         |    -4.46 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           44 |     1088 | 2024-05-25 | Permitta          | L   | 0.846      | -            | -                | -                | -         |    -9.51 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           43 |     1117 | 2024-05-23 | RUBY              | L   | 0.833      | -            | -                | -                | -         |    -6.49 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           42 |     1229 | 2024-05-20 | ALTERNATE aTTaX   | W   | 0.814      | 0.435        | 0.050 (0.018)    | 0.644 (0.228)    | 0 (0.000) |    17.69 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           41 |     1235 | 2024-05-20 | PERA              | L   | 0.813      | -            | -                | -                | -         |    -6.73 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           40 |     1332 | 2024-05-17 | Passion UA        | L   | 0.792      | -            | -                | -                | -         |    -6.74 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           39 |     1423 | 2024-05-15 | Space             | L   | 0.778      | -            | -                | -                | -         |    -9.79 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           38 |     1498 | 2024-05-13 | Sampi             | L   | 0.765      | -            | -                | -                | -         |    -7.34 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           37 |     1708 | 2024-05-03 | ENCE Academy      | L   | 0.699      | -            | -                | -                | -         |   -13.52 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           36 |     1753 | 2024-05-01 | Insilio           | L   | 0.686      | -            | -                | -                | -         |    -7.19 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           35 |     1785 | 2024-04-30 | fnatic            | L   | 0.678      | -            | -                | -                | -         |    -0.49 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           34 |     1790 | 2024-04-29 | Endpoint          | L   | 0.674      | -            | -                | -                | -         |    -8.86 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           33 |     1793 | 2024-04-29 | VP.Prodigy        | L   | 0.673      | -            | -                | -                | -         |    -9.73 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           32 |     1800 | 2024-04-29 | LEON              | W   | 0.672      | -            | -                | -                | 0 (0.000) |     6.34 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           31 |     1804 | 2024-04-29 | Enterprise        | W   | 0.672      | 0.384        | 0.055 (0.014)    | 0.635 (0.164)    | 0 (0.000) |    12.88 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           30 |     1821 | 2024-04-28 | brazylijski luz   | L   | 0.665      | -            | -                | -                | -         |   -10.10 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           29 |     1885 | 2024-04-25 | Metizport         | W   | 0.647      | 0.384        | 0.064 (0.016)    | 0.478 (0.119)    | 0 (0.000) |    14.38 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           28 |     1892 | 2024-04-25 | Grannys Knockers  | L   | 0.646      | -            | -                | -                | -         |   -12.08 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           27 |     1914 | 2024-04-24 | AMKAL             | L   | 0.639      | -            | -                | -                | -         |    -3.81 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           26 |     1935 | 2024-04-23 | Illuminar         | L   | 0.632      | -            | -                | -                | -         |   -17.06 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           25 |     1948 | 2024-04-22 | Zero Tenacity     | L   | 0.626      | -            | -                | -                | -         |    -5.29 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           24 |     1958 | 2024-04-21 | Young Ninjas      | W   | 0.621      | 0.500        | 0.023 (0.007)    | -                | 0 (0.000) |     8.29 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           23 |     1961 | 2024-04-21 | PARIVISION        | L   | 0.620      | -            | -                | -                | -         |    -8.15 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           22 |     1997 | 2024-04-20 | Permitta          | W   | 0.613      | 0.500        | 0.039 (0.012)    | 0.794 (0.243)    | 0 (0.000) |    12.36 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           21 |     2066 | 2024-04-18 | Young Ninjas      | L   | 0.601      | -            | -                | -                | -         |   -10.90 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           20 |     2100 | 2024-04-18 | Enterprise        | L   | 0.599      | -            | -                | -                | -         |    -7.10 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           19 |     2297 | 2024-04-10 | B8                | W   | 0.546      | 0.384        | 0.246 (0.052)    | 1.000 (0.210)    | -         |    13.46 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           18 |     2440 | 2024-04-05 | SINNERS           | L   | 0.514      | -            | -                | -                | -         |    -3.46 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           17 |     2583 | 2024-04-01 | Sashi             | W   | 0.485      | 0.384        | 0.215 (0.040)    | 1.000 (0.187)    | -         |    12.14 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           16 |     2691 | 2024-03-25 | Sashi             | L   | 0.440      | -            | -                | -                | -         |    -2.73 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           15 |     2952 | 2024-03-12 | Nemiga            | W   | 0.354      | 0.372        | 0.498 (0.066)    | 0.725 (0.096)    | -         |    10.15 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           14 |     2974 | 2024-03-11 | RUBY              | W   | 0.347      | 0.372        | 0.144 (0.019)    | 0.580 (0.075)    | -         |     7.50 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           13 |     3013 | 2024-03-09 | INGLORIOUS        | W   | 0.334      | -            | -                | -                | -         |     1.63 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           12 |     3039 | 2024-03-08 | FAVBET            | W   | 0.327      | 0.372        | -                | 0.420 (0.051)    | -         |     4.32 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           11 |     3186 | 2024-03-03 | TSM               | L   | 0.294      | -            | -                | -                | -         |    -6.28 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           10 |     3432 | 2024-02-20 | ex-Guild Eagles   | L   | 0.213      | -            | -                | -                | -         |    -3.13 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            9 |     3454 | 2024-02-19 | Monte             | L   | 0.207      | -            | -                | -                | -         |    -1.20 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            8 |     3459 | 2024-02-19 | Astralis          | L   | 0.206      | -            | -                | -                | -         |    -0.02 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            7 |     3759 | 2024-02-03 | 500               | L   | 0.100      | -            | -                | -                | -         |    -2.18 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            6 |     3761 | 2024-02-03 | Jake Bube         | W   | 0.100      | -            | -                | -                | -         |     0.21 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            5 |     3770 | 2024-02-03 | North Macedonia   | L   | 0.099      | -            | -                | -                | -         |    -2.79 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            4 |     4027 | 2024-01-21 | ex-sYnck          | W   | 0.013      | -            | -                | -                | -         |     0.05 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            3 |     4058 | 2024-01-20 | OG                | L   | 0.008      | -            | -                | -                | -         |    -0.04 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            2 |     4070 | 2024-01-20 | BIG               | W   | 0.006      | -            | -                | -                | -         |     0.18 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            1 |     4106 | 2024-01-19 | SINNERS           | W   | 0.001      | -            | -                | -                | -         |     0.03 | BTN, ERSIN, ragga, s0und, XELLOW     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,587.94)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      0.694 | $1,000.00      | $693.85         |
| 2024-03-25 |      0.440 | $4,300.00      | $1,894.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

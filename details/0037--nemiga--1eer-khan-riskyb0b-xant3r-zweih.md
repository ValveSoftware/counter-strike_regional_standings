### Roster Details<br />
Team Name: Nemiga<br />
Roster: 1eeR, khaN, riskyb0b, Xant3r, zweih<br />
Global Rank: [37](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [28]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1169.0<br />
<br />
Final Rank Value (1169.0) = Starting Rank Value (1166.9) + Head To Head Adjustments (2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.672[<sup>1</sup>](#table2)
- Bounty Collected: 0.437[<sup>2</sup>](#table1)
- Opponent Network: 0.325[<sup>2</sup>](#table1)
- LAN Wins: 0.051[<sup>2</sup>](#table1)

The average of these factors is 0.371<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1166.9
- 400 + ( ( 0.371 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1166.9


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
|           53 |        3 | 2024-07-31 | Space             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.76 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           52 |       65 | 2024-07-30 | G2 Ares           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.43 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           51 |      417 | 2024-07-19 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -21.18 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           50 |      443 | 2024-07-18 | PERA              | W   | 1.000      | 0.500        | -                | 0.452 (0.226)    | 0 (0.000) |     8.42 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           49 |      514 | 2024-07-17 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -9.18 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           48 |      576 | 2024-07-16 | ARCRED            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.43 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           47 |      623 | 2024-07-15 | Passion UA        | W   | 1.000      | 0.500        | 0.172 (0.086)    | 1.000 (0.500)    | 0 (0.000) |     9.26 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           46 |      879 | 2024-06-15 | Zero Tenacity     | W   | 0.893      | -            | -                | -                | 0 (0.000) |    11.06 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           45 |      915 | 2024-06-14 | System5           | W   | 0.886      | -            | -                | -                | 0 (0.000) |     1.77 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           44 |      952 | 2024-06-13 | Verdant           | W   | 0.880      | -            | -                | -                | 0 (0.000) |     5.56 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           43 |      981 | 2024-06-12 | FAVBET            | L   | 0.873      | -            | -                | -                | -         |   -23.75 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           42 |      998 | 2024-06-11 | Permitta          | W   | 0.867      | -            | -                | -                | 0 (0.000) |     5.56 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           41 |     1010 | 2024-06-11 | Rhyno             | W   | 0.865      | -            | -                | -                | -         |     8.17 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           40 |     1035 | 2024-06-10 | BLEED             | W   | 0.858      | 0.500        | 0.128 (0.055)    | -                | -         |    20.88 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           39 |     1101 | 2024-06-09 | Zero Tenacity     | W   | 0.851      | 0.500        | 0.139 (0.059)    | 1.000 (0.425)    | -         |    11.64 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           38 |     1264 | 2024-06-06 | Sampi             | W   | 0.832      | 0.500        | -                | 1.000 (0.416)    | -         |     6.40 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           37 |     1371 | 2024-06-04 | CYBERSHOKE        | W   | 0.819      | -            | -                | -                | -         |     5.20 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           36 |     1417 | 2024-06-02 | Grannys Knockers  | L   | 0.806      | -            | -                | -                | -         |   -22.20 | 1eeR, boX, khaN, riskyb0b, Xant3r    |
|           35 |     1511 | 2024-05-30 | DMS               | L   | 0.785      | -            | -                | -                | -         |   -19.22 | 1eeR, boX, khaN, riskyb0b, Xant3r    |
|           34 |     2102 | 2024-05-10 | RUBY              | L   | 0.651      | -            | -                | -                | -         |   -15.89 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           33 |     2146 | 2024-05-08 | 1WIN              | L   | 0.637      | -            | -                | -                | -         |   -15.94 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           32 |     2165 | 2024-05-07 | SINNERS           | W   | 0.631      | -            | -                | -                | -         |     5.29 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           31 |     2189 | 2024-05-05 | VP.Prodigy        | W   | 0.620      | -            | -                | -                | -         |     2.95 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           30 |     2229 | 2024-05-03 | MOUZ NXT          | W   | 0.605      | 0.500        | 0.141 (0.043)    | 1.000 (0.303)    | -         |     6.08 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           29 |     2252 | 2024-05-02 | Passion UA        | W   | 0.599      | 0.500        | 0.172 (0.052)    | 1.000 (0.300)    | -         |     5.72 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           28 |     2273 | 2024-05-01 | B8                | W   | 0.593      | 0.500        | 0.168 (0.050)    | 0.879 (0.261)    | -         |     6.32 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           27 |     2318 | 2024-04-29 | MOUZ NXT          | W   | 0.580      | 0.500        | 0.141 (0.041)    | 1.000 (0.290)    | -         |     6.25 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           26 |     2349 | 2024-04-28 | Grannys Knockers  | L   | 0.571      | -            | -                | -                | -         |   -16.28 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           25 |     2371 | 2024-04-27 | 1WIN              | W   | 0.565      | -            | -                | -                | -         |     3.67 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           24 |     2395 | 2024-04-26 | Sangal            | L   | 0.558      | -            | -                | -                | -         |   -10.30 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           23 |     2439 | 2024-04-24 | BLEED             | W   | 0.545      | -            | -                | -                | -         |     6.16 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           22 |     2463 | 2024-04-23 | Zero Tenacity     | W   | 0.538      | 0.500        | 0.139 (0.037)    | 1.000 (0.269)    | -         |     6.32 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           21 |     2481 | 2024-04-22 | MOUZ NXT          | W   | 0.531      | 0.500        | 0.141 (0.037)    | 1.000 (0.265)    | -         |     5.77 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           20 |     2497 | 2024-04-21 | 1WIN              | W   | 0.524      | -            | -                | -                | -         |     3.43 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           19 |     2530 | 2024-04-20 | Gaimin Gladiators | L   | 0.518      | -            | -                | -                | -         |   -10.90 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           18 |     2565 | 2024-04-19 | Sangal            | W   | 0.512      | 0.500        | 0.221 (0.057)    | -                | -         |     7.33 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           17 |     2611 | 2024-04-18 | Secret            | W   | 0.506      | -            | -                | -                | -         |     0.52 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           16 |     2653 | 2024-04-17 | Alliance          | W   | 0.499      | -            | -                | -                | -         |     2.40 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           15 |     2844 | 2024-04-10 | FlyQuest          | L   | 0.450      | -            | -                | -                | -         |    -6.53 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           14 |     2893 | 2024-04-09 | Steel Helmet      | W   | 0.444      | -            | -                | -                | 1 (0.444) |     0.45 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           13 |     2922 | 2024-04-08 | FaZe              | L   | 0.437      | -            | -                | -                | -         |    -0.55 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           12 |     3114 | 2024-04-01 | Zero Tenacity     | W   | 0.391      | -            | -                | -                | -         |     5.11 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           11 |     3246 | 2024-03-22 | Sashi             | L   | 0.326      | -            | -                | -                | -         |    -5.50 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           10 |     3482 | 2024-03-12 | Nexus             | L   | 0.260      | -            | -                | -                | -         |    -7.05 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            9 |     3509 | 2024-03-11 | Sashi             | W   | 0.252      | -            | -                | -                | -         |     3.64 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            8 |     3526 | 2024-03-10 | Endpoint          | W   | 0.246      | -            | -                | -                | -         |     1.37 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            7 |     3598 | 2024-03-07 | Zero Tenacity     | W   | 0.226      | -            | -                | -                | -         |     2.94 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            6 |     3660 | 2024-03-05 | KOI               | L   | 0.213      | -            | -                | -                | -         |    -3.98 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            5 |     3668 | 2024-03-05 | GUN5              | W   | 0.213      | -            | -                | -                | -         |     0.09 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            4 |     4183 | 2024-02-10 | Sashi             | W   | 0.054      | -            | -                | -                | -         |     0.85 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            3 |     4199 | 2024-02-09 | AMKAL             | W   | 0.046      | -            | -                | -                | -         |     0.71 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            2 |     4214 | 2024-02-08 | Sashi             | W   | 0.040      | -            | -                | -                | -         |     0.64 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            1 |     4219 | 2024-02-08 | BetBoom           | W   | 0.039      | -            | -                | -                | -         |     1.01 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($106,918.91)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.33) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-11 |      0.865 | $50,000.00     | $43,269.10      |
| 2024-05-09 |      0.645 | $4,000.00      | $2,578.36       |
| 2024-05-03 |      0.605 | $50,000.00     | $30,271.01      |
| 2024-04-24 |      0.545 | $50,000.00     | $27,270.67      |
| 2024-04-14 |      0.478 | $5,000.00      | $2,388.05       |
| 2024-03-25 |      0.346 | $3,300.00      | $1,141.72       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: Nemiga<br />
Roster: 1eeR, khaN, riskyb0b, Xant3r, zweih<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [30](../standings_global.md)<br />
Regional Rank: [20]( ../standings_europe.md)<br />
Final Rank Value:  1250.2<br />
<br />
Final Rank Value (1250.2) = Starting Rank Value (1280.6) + Head To Head Adjustments (-30.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.768[<sup>1</sup>](#table2)
- Bounty Collected: 0.453[<sup>2</sup>](#table1)
- Opponent Network: 0.357[<sup>2</sup>](#table1)
- LAN Wins: 0.062[<sup>2</sup>](#table1)

The average of these factors is 0.410<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1280.6
- 400 + ( ( 0.410 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1280.6


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
|           51 |       46 | 2024-07-16 | ARCRED            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.99 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           50 |       93 | 2024-07-15 | Passion UA        | W   | 1.000      | 0.500        | -                | 0.847 (0.423)    | 0 (0.000) |     7.26 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           49 |      349 | 2024-06-15 | Zero Tenacity     | W   | 0.987      | -            | -                | -                | 0 (0.000) |    10.38 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           48 |      385 | 2024-06-14 | System5           | W   | 0.981      | -            | -                | -                | 0 (0.000) |     1.64 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           47 |      422 | 2024-06-13 | Verdant           | W   | 0.974      | -            | -                | -                | 0 (0.000) |     3.86 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           46 |      451 | 2024-06-12 | FAVBET            | L   | 0.967      | -            | -                | -                | -         |   -26.77 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           45 |      468 | 2024-06-11 | Permitta          | W   | 0.961      | -            | -                | -                | 0 (0.000) |     5.34 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           44 |      480 | 2024-06-11 | Rhyno             | W   | 0.960      | 0.500        | 0.108 (0.052)    | -                | 0 (0.000) |     8.29 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           43 |      505 | 2024-06-10 | BLEED             | W   | 0.953      | 0.500        | 0.192 (0.092)    | -                | 0 (0.000) |    15.77 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           42 |      571 | 2024-06-09 | Zero Tenacity     | W   | 0.945      | 0.500        | 0.154 (0.073)    | 1.000 (0.473)    | 0 (0.000) |    10.57 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           41 |      734 | 2024-06-06 | Sampi             | W   | 0.927      | 0.500        | -                | 0.975 (0.452)    | -         |     6.13 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           40 |      841 | 2024-06-04 | CYBERSHOKE        | W   | 0.913      | -            | -                | -                | -         |     3.44 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           39 |      887 | 2024-06-02 | Grannys Knockers  | L   | 0.900      | -            | -                | -                | -         |   -25.36 | 1eeR, boX, khaN, riskyb0b, Xant3r    |
|           38 |      981 | 2024-05-30 | DMS               | L   | 0.880      | -            | -                | -                | -         |   -23.30 | 1eeR, boX, khaN, riskyb0b, Xant3r    |
|           37 |     1572 | 2024-05-10 | RUBY              | L   | 0.745      | -            | -                | -                | -         |   -18.81 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           36 |     1616 | 2024-05-08 | 1WIN              | L   | 0.732      | -            | -                | -                | -         |   -18.84 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           35 |     1635 | 2024-05-07 | SINNERS           | W   | 0.725      | -            | -                | -                | -         |     5.08 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           34 |     1659 | 2024-05-05 | VP.Prodigy        | W   | 0.714      | -            | -                | -                | -         |     2.60 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           33 |     1699 | 2024-05-03 | MOUZ NXT          | W   | 0.700      | 0.500        | 0.150 (0.052)    | 1.000 (0.350)    | -         |     5.88 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           32 |     1722 | 2024-05-02 | Passion UA        | W   | 0.694      | 0.500        | -                | 0.847 (0.294)    | -         |     3.93 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           31 |     1743 | 2024-05-01 | B8                | W   | 0.687      | 0.500        | 0.246 (0.084)    | 1.000 (0.344)    | -         |     5.93 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           30 |     1788 | 2024-04-29 | MOUZ NXT          | W   | 0.674      | 0.500        | 0.150 (0.051)    | 1.000 (0.337)    | -         |     5.95 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           29 |     1819 | 2024-04-28 | Grannys Knockers  | L   | 0.666      | -            | -                | -                | -         |   -19.43 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           28 |     1841 | 2024-04-27 | 1WIN              | W   | 0.659      | -            | -                | -                | -         |     3.61 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           27 |     1865 | 2024-04-26 | Sangal            | L   | 0.653      | -            | -                | -                | -         |   -14.27 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           26 |     1909 | 2024-04-24 | BLEED             | W   | 0.640      | 0.500        | 0.156 (0.050)    | -                | -         |     6.98 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           25 |     1933 | 2024-04-23 | Zero Tenacity     | W   | 0.632      | 0.500        | 0.154 (0.049)    | 1.000 (0.316)    | -         |     5.02 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           24 |     1951 | 2024-04-22 | MOUZ NXT          | W   | 0.625      | 0.500        | 0.150 (0.047)    | 1.000 (0.313)    | -         |     5.45 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           23 |     1967 | 2024-04-21 | 1WIN              | W   | 0.619      | -            | -                | -                | -         |     3.32 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           22 |     2000 | 2024-04-20 | Gaimin Gladiators | L   | 0.612      | -            | -                | -                | -         |   -12.40 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           21 |     2035 | 2024-04-19 | Sangal            | W   | 0.607      | 0.500        | 0.232 (0.070)    | 0.893 (0.271)    | -         |     6.26 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           20 |     2081 | 2024-04-18 | Secret            | W   | 0.600      | -            | -                | -                | -         |     0.41 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           19 |     2123 | 2024-04-17 | Alliance          | W   | 0.593      | -            | -                | -                | -         |     2.30 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           18 |     2314 | 2024-04-10 | FlyQuest          | L   | 0.544      | -            | -                | -                | -         |    -7.18 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           17 |     2363 | 2024-04-09 | Steel Helmet      | W   | 0.538      | -            | -                | -                | 1 (0.538) |     0.52 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           16 |     2392 | 2024-04-08 | FaZe              | L   | 0.531      | -            | -                | -                | -         |    -0.46 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           15 |     2584 | 2024-04-01 | Zero Tenacity     | W   | 0.485      | -            | -                | -                | -         |     4.18 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           14 |     2716 | 2024-03-22 | Sashi             | L   | 0.421      | -            | -                | -                | -         |    -9.29 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           13 |     2952 | 2024-03-12 | Nexus             | L   | 0.354      | -            | -                | -                | -         |   -10.15 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           12 |     2979 | 2024-03-11 | Sashi             | W   | 0.347      | -            | -                | -                | -         |     3.04 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           11 |     2996 | 2024-03-10 | Endpoint          | W   | 0.341      | -            | -                | -                | -         |     1.22 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           10 |     3068 | 2024-03-07 | Zero Tenacity     | W   | 0.321      | -            | -                | -                | -         |     2.63 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            9 |     3130 | 2024-03-05 | KOI               | L   | 0.307      | -            | -                | -                | -         |    -6.11 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            8 |     3138 | 2024-03-05 | GUN5              | W   | 0.307      | -            | -                | -                | -         |     0.07 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            7 |     3653 | 2024-02-10 | Sashi             | W   | 0.148      | -            | -                | -                | -         |     1.50 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            6 |     3669 | 2024-02-09 | AMKAL             | W   | 0.141      | -            | -                | -                | -         |     1.27 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            5 |     3684 | 2024-02-08 | Sashi             | W   | 0.135      | -            | -                | -                | -         |     1.36 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            4 |     3689 | 2024-02-08 | BetBoom           | W   | 0.133      | -            | -                | -                | -         |     3.71 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            3 |     3856 | 2024-01-30 | RUBY              | W   | 0.075      | -            | -                | -                | -         |     0.42 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            2 |     3859 | 2024-01-30 | ex-Sprout         | W   | 0.074      | -            | -                | -                | -         |     0.04 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            1 |     3863 | 2024-01-30 | 9 Pandas          | W   | 0.074      | -            | -                | -                | -         |     0.64 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($122,258.34)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.50) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-11 |      0.960 | $50,000.00     | $47,994.75      |
| 2024-05-09 |      0.739 | $4,000.00      | $2,956.41       |
| 2024-05-03 |      0.700 | $50,000.00     | $34,996.65      |
| 2024-04-24 |      0.640 | $50,000.00     | $31,996.31      |
| 2024-04-14 |      0.572 | $5,000.00      | $2,860.61       |
| 2024-03-25 |      0.440 | $3,300.00      | $1,453.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

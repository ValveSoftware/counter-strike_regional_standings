### Roster Details<br />
Team Name: Nemiga<br />
Roster: 1eeR, khaN, riskyb0b, roman, Xant3r<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [33](../standings_global.md)<br />
Regional Rank: [23]( ../standings_europe.md)<br />
Final Rank Value:  1245.2<br />
<br />
Final Rank Value (1245.2) = Starting Rank Value (1288.4) + Head To Head Adjustments (-43.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.768[<sup>1</sup>](#table2)
- Bounty Collected: 0.476[<sup>2</sup>](#table1)
- Opponent Network: 0.374[<sup>2</sup>](#table1)
- LAN Wins: 0.067[<sup>2</sup>](#table1)

The average of these factors is 0.421<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1288.4
- 400 + ( ( 0.421 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1288.4


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
|           50 |      185 | 2024-06-15 | Zero Tenacity     | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.39 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           49 |      221 | 2024-06-14 | System5           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.57 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           48 |      258 | 2024-06-13 | Verdant           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.72 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           47 |      287 | 2024-06-12 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |   -27.91 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           46 |      304 | 2024-06-11 | Permitta          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.36 | 1eeR, khaN, riskyb0b, roman, Xant3r  |
|           45 |      316 | 2024-06-11 | Rhyno             | W   | 1.000      | 0.500        | 0.107 (0.054)    | -                | 0 (0.000) |     8.38 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           44 |      341 | 2024-06-10 | BLEED             | W   | 0.992      | 0.500        | 0.348 (0.173)    | 0.908 (0.451)    | 0 (0.000) |    17.95 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           43 |      407 | 2024-06-09 | Zero Tenacity     | W   | 0.985      | 0.500        | 0.153 (0.076)    | 1.000 (0.492)    | 0 (0.000) |    10.67 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           42 |      570 | 2024-06-06 | Slovakia          | W   | 0.966      | 0.500        | -                | 0.891 (0.430)    | 0 (0.000) |     6.08 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           41 |      677 | 2024-06-04 | CYBERSHOKE        | W   | 0.953      | -            | -                | -                | 0 (0.000) |     3.33 | 1eeR, khaN, riskyb0b, Xant3r, zweih  |
|           40 |      723 | 2024-06-02 | Grannys Knockers  | L   | 0.940      | -            | -                | -                | -         |   -26.65 | 1eeR, boX, khaN, riskyb0b, Xant3r    |
|           39 |      817 | 2024-05-30 | DMS               | L   | 0.919      | -            | -                | -                | -         |   -24.57 | 1eeR, boX, khaN, riskyb0b, Xant3r    |
|           38 |     1408 | 2024-05-10 | RUBY              | L   | 0.785      | -            | -                | -                | -         |   -20.29 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           37 |     1452 | 2024-05-08 | 1WIN              | L   | 0.772      | -            | -                | -                | -         |   -19.77 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           36 |     1471 | 2024-05-07 | SINNERS           | W   | 0.765      | -            | -                | -                | -         |     5.09 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           35 |     1495 | 2024-05-05 | VP.Prodigy        | W   | 0.754      | -            | -                | -                | -         |     2.52 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           34 |     1535 | 2024-05-03 | MOUZ NXT          | W   | 0.740      | 0.500        | 0.152 (0.056)    | 1.000 (0.370)    | -         |     6.07 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           33 |     1558 | 2024-05-02 | Passion UA        | W   | 0.733      | 0.500        | -                | 0.821 (0.301)    | -         |     3.88 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           32 |     1579 | 2024-05-01 | B8                | W   | 0.727      | 0.500        | 0.242 (0.088)    | 1.000 (0.363)    | -         |     6.17 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           31 |     1624 | 2024-04-29 | MOUZ NXT          | W   | 0.714      | 0.500        | 0.152 (0.054)    | 1.000 (0.357)    | -         |     6.07 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           30 |     1655 | 2024-04-28 | Grannys Knockers  | L   | 0.705      | -            | -                | -                | -         |   -20.72 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           29 |     1677 | 2024-04-27 | 1WIN              | W   | 0.699      | -            | -                | -                | -         |     3.81 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           28 |     1701 | 2024-04-26 | Sangal            | L   | 0.692      | -            | -                | -                | -         |   -15.37 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           27 |     1745 | 2024-04-24 | BLEED             | W   | 0.680      | 0.500        | 0.348 (0.118)    | 0.908 (0.309)    | -         |    13.23 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           26 |     1769 | 2024-04-23 | Zero Tenacity     | W   | 0.672      | 0.500        | 0.153 (0.052)    | 1.000 (0.336)    | -         |     5.15 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           25 |     1787 | 2024-04-22 | MOUZ NXT          | W   | 0.665      | 0.500        | 0.152 (0.050)    | 1.000 (0.332)    | -         |     5.70 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           24 |     1803 | 2024-04-21 | 1WIN              | W   | 0.658      | -            | -                | -                | -         |     3.60 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           23 |     1836 | 2024-04-20 | Gaimin Gladiators | L   | 0.652      | -            | -                | -                | -         |   -12.40 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           22 |     1871 | 2024-04-19 | Sangal            | W   | 0.646      | 0.500        | 0.231 (0.075)    | -                | -         |     6.46 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           21 |     1917 | 2024-04-18 | Secret            | W   | 0.640      | -            | -                | -                | -         |     0.43 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           20 |     1959 | 2024-04-17 | Alliance          | W   | 0.633      | -            | -                | -                | -         |     2.41 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           19 |     2150 | 2024-04-10 | FlyQuest          | L   | 0.584      | -            | -                | -                | -         |    -7.57 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           18 |     2199 | 2024-04-09 | Steel Helmet      | W   | 0.578      | -            | -                | -                | 1 (0.578) |     0.53 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           17 |     2228 | 2024-04-08 | FaZe              | L   | 0.571      | -            | -                | -                | -         |    -0.52 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           16 |     2420 | 2024-04-01 | Zero Tenacity     | W   | 0.525      | -            | -                | -                | -         |     4.41 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           15 |     2552 | 2024-03-22 | Sashi             | L   | 0.460      | -            | -                | -                | -         |   -10.31 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           14 |     2788 | 2024-03-12 | Romania           | L   | 0.394      | -            | -                | -                | -         |   -11.39 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           13 |     2815 | 2024-03-11 | Sashi             | W   | 0.386      | -            | -                | -                | -         |     3.17 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           12 |     2832 | 2024-03-10 | Endpoint          | W   | 0.380      | -            | -                | -                | -         |     1.28 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           11 |     2904 | 2024-03-07 | Zero Tenacity     | W   | 0.360      | -            | -                | -                | -         |     2.86 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|           10 |     2966 | 2024-03-05 | KOI               | L   | 0.347      | -            | -                | -                | -         |    -7.15 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            9 |     2974 | 2024-03-05 | GUN5              | W   | 0.347      | -            | -                | -                | -         |     0.07 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            8 |     3489 | 2024-02-10 | Sashi             | W   | 0.188      | -            | -                | -                | -         |     1.82 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            7 |     3505 | 2024-02-09 | AMKAL             | W   | 0.181      | -            | -                | -                | -         |     1.71 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            6 |     3520 | 2024-02-08 | Sashi             | W   | 0.174      | -            | -                | -                | -         |     1.69 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            5 |     3525 | 2024-02-08 | BetBoom           | W   | 0.173      | -            | -                | -                | -         |     4.84 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            4 |     3692 | 2024-01-30 | RUBY              | W   | 0.114      | -            | -                | -                | -         |     0.58 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            3 |     3695 | 2024-01-30 | ex-Sprout         | W   | 0.114      | -            | -                | -                | -         |     0.06 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            2 |     3699 | 2024-01-30 | 9 Pandas          | W   | 0.113      | -            | -                | -                | -         |     0.97 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |
|            1 |     4114 | 2024-01-16 | samaloyod         | L   | 0.021      | -            | -                | -                | -         |    -0.65 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($128,687.08)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.50) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-11 |      1.000 | $50,000.00     | $49,975.26      |
| 2024-05-09 |      0.779 | $4,000.00      | $3,114.85       |
| 2024-05-03 |      0.740 | $50,000.00     | $36,977.16      |
| 2024-04-24 |      0.680 | $50,000.00     | $33,976.82      |
| 2024-04-14 |      0.612 | $5,000.00      | $3,058.66       |
| 2024-03-25 |      0.480 | $3,300.00      | $1,584.32       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

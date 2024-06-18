### Roster Details<br />
Team Name: esmagaB<br />
Roster: Ag1l, aragornN, P3R3IIRA, pr, rafaxF<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [145](../standings_global.md)<br />
Regional Rank: [94]( ../standings_europe.md)<br />
Final Rank Value:  728.4<br />
<br />
Final Rank Value (728.4) = Starting Rank Value (757.4) + Head To Head Adjustments (-29.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.317[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 757.4
- 400 + ( ( 0.176 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 757.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      608 | 2024-06-01 | FLuffy Gangsters  | L   | 1.000      | -            | -                | -                | -         |   -23.62 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           25 |      674 | 2024-05-30 | RUBY              | L   | 1.000      | -            | -                | -                | -         |    -6.59 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           24 |      709 | 2024-05-29 | TNL               | W   | 1.000      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.73 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           23 |     1246 | 2024-05-11 | AL QATRAO         | L   | 0.949      | -            | -                | -                | -         |   -15.69 | Ag1l, aragornN, fox, pr, rafaxF               |
|           22 |     1690 | 2024-04-20 | 1WIN              | L   | 0.809      | -            | -                | -                | -         |    -5.32 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           21 |     1724 | 2024-04-19 | Secret            | W   | 0.803      | 0.143        | 0.000 (0.000)    | 0.108 (0.012)    | 0 (0.000) |     7.46 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           20 |     1767 | 2024-04-18 | Illuminar         | L   | 0.796      | -            | -                | -                | -         |    -9.34 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           19 |     1824 | 2024-04-17 | 500               | W   | 0.789      | 0.143        | 0.001 (0.000)    | 0.292 (0.033)    | 0 (0.000) |    15.09 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF          |
|           18 |     2879 | 2024-03-03 | Rhyno             | W   | 0.489      | 0.314        | 0.094 (0.014)    | 0.381 (0.059)    | 1 (0.489) |    12.65 | DDias, krazy, renatoohaxx, snapy, TMKj        |
|           17 |     2913 | 2024-03-02 | OVERFRAG          | W   | 0.481      | 0.314        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.481) |     3.38 | devineez, HS, Lr0z1n, P3R3IIRA, seabraez      |
|           16 |     3046 | 2024-02-24 | 500               | L   | 0.435      | -            | -                | -                | -         |    -6.83 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           15 |     3184 | 2024-02-18 | Alliance          | L   | 0.395      | -            | -                | -                | -         |    -4.09 | avid, b0denmaster, PlesseN, robiin, twist     |
|           14 |     3352 | 2024-02-11 | Young Ninjas      | L   | 0.349      | -            | -                | -                | -         |    -4.53 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|           13 |     3442 | 2024-02-04 | ARCRED            | W   | 0.301      | 0.358        | 0.048 (0.005)    | 0.346 (0.037)    | 0 (0.000) |     6.36 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|           12 |     3459 | 2024-02-03 | Rhyno             | L   | 0.296      | -            | -                | -                | -         |    -1.70 | DDias, krazy, renatoohaxx, snapy, TMKj        |
|           11 |     3525 | 2024-02-01 | AL QATRAO         | W   | 0.282      | 0.143        | 0.006 (0.000)    | 0.044 (0.002)    | 0 (0.000) |     4.33 | Drext, frozzen, hdstr, nesto, Shr             |
|           10 |     3530 | 2024-02-01 | Agency            | W   | 0.281      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.08 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            9 |     3919 | 2024-01-17 | Insilio           | L   | 0.184      | -            | -                | -                | -         |    -1.48 | faydett, FpSSS, Pipw, Polt, sugaR             |
|            8 |     3929 | 2024-01-17 | NAVI Junior       | W   | 0.183      | 0.143        | 0.007 (0.000)    | 0.071 (0.002)    | 0 (0.000) |     2.55 | dem0n, fnl, Krabeni, Magic, makazze           |
|            7 |     3979 | 2024-01-16 | Aurora Young Blud | L   | 0.176      | -            | -                | -                | -         |    -2.78 | bl1x1, bluewh1te, easy, sh1geo, VILBy         |
|            6 |     3998 | 2024-01-16 | m1xx              | W   | 0.176      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.67 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            5 |     4084 | 2024-01-13 | Betera            | L   | 0.155      | -            | -                | -                | -         |    -2.67 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            4 |     4113 | 2024-01-12 | Walkover          | W   | 0.150      | -            | -                | -                | -         |     0.57 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            3 |     4187 | 2024-01-10 | PERA              | L   | 0.137      | -            | -                | -                | -         |    -0.95 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            2 |     4261 | 2023-12-29 | Metizport         | L   | 0.055      | -            | -                | -                | -         |    -0.41 | Ag1l, aragornN, NOPEEJ, pr, rafaxF            |
|            1 |     4266 | 2023-12-27 | The Witchers      | L   | 0.043      | -            | -                | -                | -         |    -0.85 | Dragon, fear, Sdaim, smooya, synyx            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,105.38)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      0.955 | $539.00        | $514.85         |
| 2024-03-03 |      0.489 | $3,251.00      | $1,590.53       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

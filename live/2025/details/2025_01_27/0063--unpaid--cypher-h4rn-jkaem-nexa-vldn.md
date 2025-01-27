### Roster Details<br />
Team Name: UNPAID<br />
Roster: CYPHER, h4rn, jkaem, nexa, VLDN<br />
Global Rank: [63](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [44]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  989.1<br />
<br />
Final Rank Value (989.1) = Starting Rank Value (988.2) + Head To Head Adjustments (1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.538[<sup>1</sup>](#table2)
- Bounty Collected: 0.365[<sup>2</sup>](#table1)
- Opponent Network: 0.091[<sup>2</sup>](#table1)
- LAN Wins: 0.209[<sup>2</sup>](#table1)

The average of these factors is 0.301<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 988.2
- 400 + ( ( 0.301 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 988.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |     1563 | 2024-10-19 | Nemiga         | L   | 0.534      | -            | -                | -                | -         |    -3.22 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           30 |     1573 | 2024-10-19 | HEROIC         | W   | 0.533      | 0.624        | 0.262 (0.087)    | 0.363 (0.121)    | 1 (0.533) |    13.51 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           29 |     1601 | 2024-10-18 | PARIVISION     | W   | 0.526      | 0.624        | 0.020 (0.007)    | 0.266 (0.087)    | 1 (0.526) |     6.13 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           28 |     1627 | 2024-10-17 | Solid          | W   | 0.519      | 0.624        | 0.047 (0.015)    | 0.679 (0.220)    | 1 (0.519) |     7.27 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           27 |     1654 | 2024-10-16 | fnatic         | L   | 0.514      | -            | -                | -                | -         |    -5.14 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           26 |     2483 | 2024-09-19 | devils.one     | L   | 0.333      | -            | -                | -                | -         |    -8.55 | CYPHER, jkaem, nawwk, Patti, VLDN  |
|           25 |     2533 | 2024-09-18 | Sashi          | L   | 0.324      | -            | -                | -                | -         |    -4.84 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           24 |     2547 | 2024-09-17 | Sashi          | W   | 0.320      | 0.443        | 0.040 (0.006)    | 0.652 (0.092)    | 0 (0.000) |     5.42 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           23 |     2553 | 2024-09-17 | GUN5           | W   | 0.319      | 0.443        | 0.227 (0.032)    | 0.988 (0.140)    | 0 (0.000) |     6.28 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           22 |     2561 | 2024-09-17 | Sashi          | L   | 0.318      | -            | -                | -                | -         |    -4.54 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           21 |     2621 | 2024-09-14 | Insilio        | L   | 0.301      | -            | -                | -                | -         |    -6.92 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           20 |     2666 | 2024-09-13 | Spirit Academy | W   | 0.293      | 0.435        | 0.169 (0.021)    | 1.000 (0.127)    | 0 (0.000) |     5.06 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           19 |     2773 | 2024-09-10 | Passion UA     | W   | 0.271      | 0.384        | 0.105 (0.011)    | 0.802 (0.084)    | 0 (0.000) |     6.10 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           18 |     2828 | 2024-09-07 | B8             | L   | 0.253      | -            | -                | -                | -         |    -2.46 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           17 |     2864 | 2024-09-06 | Insilio        | W   | 0.246      | 0.435        | 0.015 (0.002)    | 0.273 (0.029)    | 0 (0.000) |     1.99 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           16 |     3003 | 2024-09-02 | B8             | L   | 0.218      | -            | -                | -                | -         |    -2.10 | h4rn, hampus, jkaem, nexa, VLDN    |
|           15 |     3135 | 2024-08-28 | EYEBALLERS     | L   | 0.186      | -            | -                | -                | -         |    -4.03 | CYPHER, hampus, jkaem, nawwk, nexa |
|           14 |     3361 | 2024-08-23 | GamerLegion    | L   | 0.154      | -            | -                | -                | -         |    -3.61 | CYPHER, hampus, jkaem, nawwk, nexa |
|           13 |     3373 | 2024-08-23 | ECLOT          | L   | 0.152      | -            | -                | -                | -         |    -0.69 | CYPHER, hampus, jkaem, nawwk, nexa |
|           12 |     3401 | 2024-08-22 | HEROIC         | L   | 0.145      | -            | -                | -                | -         |    -1.11 | CYPHER, hampus, jkaem, nawwk, nexa |
|           11 |     3453 | 2024-08-21 | Rhyno          | W   | 0.139      | 0.143        | 0.007 (0.000)    | 0.193 (0.004)    | 0 (0.000) |     0.93 | CYPHER, hampus, jkaem, nawwk, nexa |
|           10 |     3481 | 2024-08-21 | TSM            | W   | 0.138      | 0.143        | 0.032 (0.001)    | 0.366 (0.007)    | 0 (0.000) |     1.45 | CYPHER, hampus, jkaem, nawwk, nexa |
|            9 |     3532 | 2024-08-19 | Cloud9         | L   | 0.126      | -            | -                | -                | -         |    -1.77 | CYPHER, hampus, jkaem, nawwk, nexa |
|            8 |     3587 | 2024-08-17 | SINNERS        | L   | 0.113      | -            | -                | -                | -         |    -1.37 | CYPHER, hampus, jkaem, nawwk, nexa |
|            7 |     3636 | 2024-08-15 | B8             | L   | 0.100      | -            | -                | -                | -         |    -1.00 | CYPHER, hampus, jkaem, nawwk, nexa |
|            6 |     3933 | 2024-08-06 | Metizport      | L   | 0.039      | -            | -                | -                | -         |    -1.17 | CYPHER, hampus, jkaem, nawwk, nexa |
|            5 |     3940 | 2024-08-06 | Johnny Speeds  | L   | 0.039      | -            | -                | -                | -         |    -0.50 | CYPHER, hampus, jkaem, nawwk, nexa |
|            4 |     3947 | 2024-08-06 | HAVU           | W   | 0.038      | -            | -                | -                | -         |     0.07 | CYPHER, hampus, jkaem, nawwk, nexa |
|            3 |     4049 | 2024-08-02 | Cloud9         | L   | 0.014      | -            | -                | -                | -         |    -0.20 | CYPHER, hampus, jkaem, nawwk, nexa |
|            2 |     4060 | 2024-08-02 | 3DMAX          | L   | 0.013      | -            | -                | -                | -         |    -0.04 | CYPHER, hampus, jkaem, nawwk, nexa |
|            1 |     4145 | 2024-07-31 | AMKAL          | W   | 0.000      | -            | -                | -                | -         |     0.00 | CYPHER, hampus, jkaem, nawwk, nexa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,211.05)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-19 |      0.534 | $50,000.00     | $26,710.88      |
| 2024-09-24 |      0.366 | $1,000.00      | $365.74         |
| 2024-09-15 |      0.307 | $2,000.00      | $614.02         |
| 2024-09-08 |      0.260 | $2,000.00      | $520.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

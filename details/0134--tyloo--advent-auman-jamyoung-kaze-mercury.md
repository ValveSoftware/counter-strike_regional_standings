### Roster Details<br />
Team Name: TYLOO<br />
Roster: advent, aumaN, JamYoung, kaze, Mercury<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [134](../standings_global.md)<br />
Regional Rank: [11]( ../standings_asia.md)<br />
Final Rank Value:  760.8<br />
<br />
Final Rank Value (760.8) = Starting Rank Value (745.3) + Head To Head Adjustments (15.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.288[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 745.3
- 400 + ( ( 0.170 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 745.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     2988 | 2024-02-27 | ATOX               | L   | 0.453      | -            | -                | -                | -         |    -3.80 | advent, aumaN, JamYoung, kaze, Mercury |
|           17 |     3000 | 2024-02-26 | Lynn Vision        | L   | 0.446      | -            | -                | -                | -         |    -1.40 | advent, aumaN, JamYoung, kaze, Mercury |
|           16 |     3002 | 2024-02-25 | JiJieHao           | W   | 0.446      | 0.143        | 0.000 (0.000)    | 0.082 (0.005)    | 1 (0.446) |     1.92 | advent, aumaN, JamYoung, kaze, Mercury |
|           15 |     3506 | 2024-02-02 | Rare Atom          | L   | 0.287      | -            | -                | -                | -         |    -5.48 | advent, aumaN, JamYoung, kaze, Mercury |
|           14 |     3536 | 2024-02-01 | Newhappy           | W   | 0.280      | 0.143        | 0.000 (0.000)    | 0.066 (0.003)    | 0 (0.000) |     1.87 | advent, aumaN, JamYoung, kaze, Mercury |
|           13 |     3538 | 2024-02-01 | GR                 | W   | 0.280      | 0.143        | 0.011 (0.000)    | 0.119 (0.005)    | 0 (0.000) |     3.31 | advent, aumaN, JamYoung, kaze, Mercury |
|           12 |     3592 | 2024-01-27 | Lynn Vision        | L   | 0.252      | -            | -                | -                | -         |    -0.69 | advent, aumaN, JamYoung, kaze, Mercury |
|           11 |     3601 | 2024-01-27 | The MongolZ        | W   | 0.248      | 0.143        | 0.986 (0.035)    | 0.681 (0.024)    | 0 (0.000) |     7.81 | advent, aumaN, JamYoung, kaze, Mercury |
|           10 |     3605 | 2024-01-27 | The Huns           | W   | 0.247      | 0.143        | 0.000 (0.000)    | 0.065 (0.002)    | 0 (0.000) |     1.76 | advent, aumaN, JamYoung, kaze, Mercury |
|            9 |     3608 | 2024-01-26 | ACME               | W   | 0.246      | 0.435        | 0.001 (0.000)    | 0.009 (0.001)    | 1 (0.246) |     2.57 | advent, aumaN, JamYoung, kaze, Mercury |
|            8 |     3619 | 2024-01-26 | The MongolZ        | L   | 0.242      | -            | -                | -                | -         |    -0.01 | advent, aumaN, JamYoung, kaze, Mercury |
|            7 |     3623 | 2024-01-26 | Wings Up           | W   | 0.241      | 0.143        | 0.000 (0.000)    | 0.032 (0.001)    | 0 (0.000) |     1.62 | advent, aumaN, JamYoung, kaze, Mercury |
|            6 |     3630 | 2024-01-26 | The MongolZ        | L   | 0.240      | -            | -                | -                | -         |    -0.01 | advent, aumaN, JamYoung, kaze, Mercury |
|            5 |     3632 | 2024-01-25 | Incheon On Sla2ers | W   | 0.239      | 0.435        | 0.001 (0.000)    | -                | 1 (0.239) |     1.68 | advent, aumaN, JamYoung, kaze, Mercury |
|            4 |     3734 | 2024-01-21 | Rare Atom          | W   | 0.208      | 0.143        | 0.009 (0.000)    | 0.071 (0.002)    | 0 (0.000) |     2.72 | advent, aumaN, JamYoung, kaze, Mercury |
|            3 |     3743 | 2024-01-20 | Lynn Vision        | L   | 0.206      | -            | -                | -                | -         |    -0.52 | advent, aumaN, JamYoung, kaze, Mercury |
|            2 |     3841 | 2024-01-19 | Newhappy           | W   | 0.193      | 0.143        | 0.000 (0.000)    | 0.066 (0.002)    | 0 (0.000) |     1.40 | advent, aumaN, JamYoung, kaze, Mercury |
|            1 |     3855 | 2024-01-18 | SHPL               | W   | 0.192      | 0.143        | -                | 0.010 (0.000)    | -         |     0.78 | advent, aumaN, JamYoung, kaze, Mercury |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,016.73)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

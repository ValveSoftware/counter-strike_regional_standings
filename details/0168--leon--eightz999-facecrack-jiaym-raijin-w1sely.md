### Roster Details<br />
Team Name: LEON<br />
Roster: eightz999, facecrack, JIaYm, Raijin, w1sely<br />
Global Rank: [168](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [109]( ../standings_europe.md)<br />
<br />
Final Rank Value:  668.0<br />
<br />
Final Rank Value (668.0) = Starting Rank Value (695.4) + Head To Head Adjustments (-27.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 695.4
- 400 + ( ( 0.144 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 695.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      683 | 2024-07-18 | TSM               | L   | 1.000      | -            | -                | -                | -         |    -3.25 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           17 |      745 | 2024-07-17 | Preasy            | L   | 1.000      | -            | -                | -                | -         |   -10.99 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           16 |     1103 | 2024-06-15 | Preasy            | L   | 0.851      | -            | -                | -                | -         |    -9.52 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           15 |     1135 | 2024-06-14 | RUBY              | L   | 0.846      | -            | -                | -                | -         |    -6.09 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           14 |     1196 | 2024-06-12 | CYBERSHOKE        | L   | 0.833      | -            | -                | -                | -         |    -6.77 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           13 |     1223 | 2024-06-11 | MASONIC           | W   | 0.825      | 0.143        | 0.009 (0.001)    | 0.081 (0.010)    | 0 (0.000) |    15.55 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           12 |     1598 | 2024-06-03 | Verdant           | L   | 0.774      | -            | -                | -                | -         |    -5.55 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           11 |     1660 | 2024-06-01 | Aurora Young Blud | L   | 0.759      | -            | -                | -                | -         |    -6.16 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           10 |     1682 | 2024-05-31 | VP.Prodigy        | W   | 0.754      | 0.372        | 0.025 (0.007)    | 0.383 (0.107)    | 0 (0.000) |    18.63 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            9 |     1732 | 2024-05-29 | HOTU              | L   | 0.741      | -            | -                | -                | -         |   -12.09 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            8 |     2042 | 2024-05-18 | Rhyno             | L   | 0.665      | -            | -                | -                | -         |    -3.51 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            7 |     2065 | 2024-05-17 | WOPA              | W   | 0.659      | 0.143        | 0.001 (0.000)    | 0.121 (0.011)    | 0 (0.000) |     8.42 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            6 |     2199 | 2024-05-14 | VP.Prodigy        | L   | 0.641      | -            | -                | -                | -         |    -5.33 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            5 |     2225 | 2024-05-13 | Secret            | W   | 0.634      | 0.143        | 0.000 (0.000)    | 0.055 (0.005)    | 0 (0.000) |     6.17 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            4 |     2538 | 2024-04-29 | Nexus             | L   | 0.538      | -            | -                | -                | -         |    -5.04 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            3 |     2554 | 2024-04-28 | VP.Prodigy        | L   | 0.532      | -            | -                | -                | -         |    -4.59 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            2 |     2840 | 2024-04-18 | BIG               | L   | 0.465      | -            | -                | -                | -         |    -0.51 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            1 |     3316 | 2024-04-01 | Lazer Cats        | W   | 0.353      | 0.384        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.25 | eightz999, facecrack, JIaYm, Raijin, w1sely |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,148.44)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

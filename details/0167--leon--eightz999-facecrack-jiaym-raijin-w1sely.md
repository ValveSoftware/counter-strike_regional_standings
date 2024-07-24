### Roster Details<br />
Team Name: LEON<br />
Roster: eightz999, facecrack, JIaYm, Raijin, w1sely<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [167](../standings_global.md)<br />
Regional Rank: [106]( ../standings_europe.md)<br />
Final Rank Value:  669.2<br />
<br />
Final Rank Value (669.2) = Starting Rank Value (703.6) + Head To Head Adjustments (-34.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 703.6
- 400 + ( ( 0.150 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 703.6


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
|           18 |      233 | 2024-07-18 | TSM               | L   | 1.000      | -            | -                | -                | -         |    -4.10 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           17 |      295 | 2024-07-17 | Preasy            | L   | 1.000      | -            | -                | -                | -         |   -11.07 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           16 |      653 | 2024-06-15 | Preasy            | L   | 0.938      | -            | -                | -                | -         |   -10.14 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           15 |      685 | 2024-06-14 | RUBY              | L   | 0.932      | -            | -                | -                | -         |    -6.65 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           14 |      746 | 2024-06-12 | CYBERSHOKE        | L   | 0.919      | -            | -                | -                | -         |    -8.89 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           13 |      773 | 2024-06-11 | MASONIC           | W   | 0.911      | 0.143        | 0.012 (0.002)    | 0.100 (0.013)    | 0 (0.000) |    17.82 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           12 |     1148 | 2024-06-03 | Verdant           | L   | 0.861      | -            | -                | -                | -         |    -6.08 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           11 |     1210 | 2024-06-01 | Aurora Young Blud | L   | 0.846      | -            | -                | -                | -         |   -10.87 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           10 |     1232 | 2024-05-31 | VP.Prodigy        | W   | 0.840      | 0.372        | 0.033 (0.010)    | 0.462 (0.144)    | 0 (0.000) |    20.54 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            9 |     1282 | 2024-05-29 | HOTU              | L   | 0.828      | -            | -                | -                | -         |   -13.52 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            8 |     1592 | 2024-05-18 | Rhyno             | L   | 0.751      | -            | -                | -                | -         |    -3.52 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            7 |     1615 | 2024-05-17 | WOPA              | W   | 0.746      | 0.143        | 0.002 (0.000)    | 0.143 (0.015)    | 0 (0.000) |     9.37 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            6 |     1749 | 2024-05-14 | VP.Prodigy        | L   | 0.727      | -            | -                | -                | -         |    -6.26 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            5 |     1775 | 2024-05-13 | Secret            | W   | 0.721      | 0.143        | 0.000 (0.000)    | 0.074 (0.008)    | 0 (0.000) |     7.14 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            4 |     2088 | 2024-04-29 | Nexus             | L   | 0.625      | -            | -                | -                | -         |    -5.75 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            3 |     2104 | 2024-04-28 | VP.Prodigy        | L   | 0.619      | -            | -                | -                | -         |    -5.60 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            2 |     2390 | 2024-04-18 | BIG               | L   | 0.551      | -            | -                | -                | -         |    -0.69 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            1 |     2866 | 2024-04-01 | Lazer Cats        | W   | 0.440      | 0.384        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.92 | eightz999, facecrack, JIaYm, Raijin, w1sely |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,364.57)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

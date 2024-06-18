### Roster Details<br />
Team Name: LEON<br />
Roster: eightz999, facecrack, JIaYm, Raijin, w1sely<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [160](../standings_global.md)<br />
Regional Rank: [103]( ../standings_europe.md)<br />
Final Rank Value:  687.6<br />
<br />
Final Rank Value (687.6) = Starting Rank Value (710.1) + Head To Head Adjustments (-22.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 710.1
- 400 + ( ( 0.153 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 710.1


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
|           17 |       65 | 2024-06-15 | Preasy            | L   | 1.000      | -            | -                | -                | -         |   -11.03 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           16 |       97 | 2024-06-14 | RUBY              | L   | 1.000      | -            | -                | -                | -         |    -6.45 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           15 |      158 | 2024-06-12 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |    -9.58 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           14 |      185 | 2024-06-11 | MASONIC           | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.122 (0.017)    | 0 (0.000) |    20.45 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           13 |      560 | 2024-06-03 | Verdant           | L   | 1.000      | -            | -                | -                | -         |    -9.59 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           12 |      624 | 2024-06-01 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -14.39 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           11 |      646 | 2024-05-31 | VP.Prodigy        | W   | 1.000      | 0.372        | 0.033 (0.012)    | 0.518 (0.193)    | 0 (0.000) |    25.28 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           10 |      696 | 2024-05-29 | HOTU              | L   | 1.000      | -            | -                | -                | -         |   -16.29 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            9 |     1006 | 2024-05-18 | Rhyno             | L   | 0.994      | -            | -                | -                | -         |    -4.29 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            8 |     1029 | 2024-05-17 | WOPA              | W   | 0.988      | 0.143        | 0.002 (0.000)    | 0.141 (0.020)    | 0 (0.000) |    12.10 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            7 |     1163 | 2024-05-14 | VP.Prodigy        | L   | 0.970      | -            | -                | -                | -         |    -7.37 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            6 |     1189 | 2024-05-13 | Secret            | W   | 0.963      | 0.143        | 0.000 (0.000)    | 0.108 (0.015)    | 0 (0.000) |    11.14 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            5 |     1502 | 2024-04-29 | Nexus             | L   | 0.867      | -            | -                | -                | -         |    -6.89 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            4 |     1518 | 2024-04-28 | VP.Prodigy        | L   | 0.861      | -            | -                | -                | -         |    -6.90 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            3 |     1804 | 2024-04-18 | BIG               | L   | 0.794      | -            | -                | -                | -         |    -0.52 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            2 |     2280 | 2024-04-01 | Lazer Cats        | W   | 0.682      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.30 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            1 |     3980 | 2024-01-16 | ex-Anonymo        | L   | 0.176      | -            | -                | -                | -         |    -3.55 | eightz999, facecrack, JIaYm, k0s, Z1W0W     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,500.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

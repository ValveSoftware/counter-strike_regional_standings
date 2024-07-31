### Roster Details<br />
Team Name: LEON<br />
Roster: eightz999, facecrack, JIaYm, Raijin, w1sely<br />
Global Rank: [169](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [109]( ../standings_europe.md)<br />
<br />
Final Rank Value:  667.7<br />
<br />
Final Rank Value (667.7) = Starting Rank Value (698.6) + Head To Head Adjustments (-31.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.316[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 698.6
- 400 + ( ( 0.145 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 698.6


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
|           18 |      475 | 2024-07-18 | TSM               | L   | 1.000      | -            | -                | -                | -         |    -3.47 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           17 |      537 | 2024-07-17 | Preasy            | L   | 1.000      | -            | -                | -                | -         |   -11.27 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           16 |      895 | 2024-06-15 | Preasy            | L   | 0.891      | -            | -                | -                | -         |    -9.89 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           15 |      927 | 2024-06-14 | RUBY              | L   | 0.885      | -            | -                | -                | -         |    -6.53 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           14 |      988 | 2024-06-12 | CYBERSHOKE        | L   | 0.872      | -            | -                | -                | -         |    -7.02 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           13 |     1015 | 2024-06-11 | MASONIC           | W   | 0.864      | 0.143        | 0.009 (0.001)    | 0.087 (0.011)    | 0 (0.000) |    16.59 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           12 |     1390 | 2024-06-03 | Verdant           | L   | 0.813      | -            | -                | -                | -         |    -5.79 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           11 |     1452 | 2024-06-01 | Aurora Young Blud | L   | 0.798      | -            | -                | -                | -         |    -9.12 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           10 |     1474 | 2024-05-31 | VP.Prodigy        | W   | 0.793      | 0.372        | 0.026 (0.008)    | 0.406 (0.120)    | 0 (0.000) |    19.58 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            9 |     1524 | 2024-05-29 | HOTU              | L   | 0.780      | -            | -                | -                | -         |   -12.72 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            8 |     1834 | 2024-05-18 | Rhyno             | L   | 0.704      | -            | -                | -                | -         |    -3.54 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            7 |     1857 | 2024-05-17 | WOPA              | W   | 0.699      | 0.143        | 0.001 (0.000)    | 0.127 (0.013)    | 0 (0.000) |     8.88 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            6 |     1991 | 2024-05-14 | VP.Prodigy        | L   | 0.680      | -            | -                | -                | -         |    -5.64 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            5 |     2017 | 2024-05-13 | Secret            | W   | 0.674      | 0.143        | 0.000 (0.000)    | 0.061 (0.006)    | 0 (0.000) |     6.59 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            4 |     2330 | 2024-04-29 | Nexus             | L   | 0.578      | -            | -                | -                | -         |    -5.45 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            3 |     2346 | 2024-04-28 | VP.Prodigy        | L   | 0.571      | -            | -                | -                | -         |    -4.93 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            2 |     2632 | 2024-04-18 | BIG               | L   | 0.504      | -            | -                | -                | -         |    -0.80 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            1 |     3108 | 2024-04-01 | Lazer Cats        | W   | 0.393      | 0.384        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.57 | eightz999, facecrack, JIaYm, Raijin, w1sely |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,246.35)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

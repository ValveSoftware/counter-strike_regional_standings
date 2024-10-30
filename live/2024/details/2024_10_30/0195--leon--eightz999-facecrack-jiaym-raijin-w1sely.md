### Roster Details<br />
Team Name: LEON<br />
Roster: eightz999, facecrack, JIaYm, Raijin, w1sely<br />
Global Rank: [195](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [119]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  625.5<br />
<br />
Final Rank Value (625.5) = Starting Rank Value (637.4) + Head To Head Adjustments (-11.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.284[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 637.4
- 400 + ( ( 0.120 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 637.4


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
|           15 |     1891 | 2024-08-26 | BetBoom           | L   | 0.766      | -            | -                | -                | -         |    -0.93 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           14 |     3237 | 2024-07-18 | TSM               | L   | 0.505      | -            | -                | -                | -         |    -1.58 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           13 |     3299 | 2024-07-17 | Preasy            | L   | 0.499      | -            | -                | -                | -         |    -5.92 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           12 |     3657 | 2024-06-15 | Preasy            | L   | 0.285      | -            | -                | -                | -         |    -3.40 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           11 |     3689 | 2024-06-14 | RUBY              | L   | 0.279      | -            | -                | -                | -         |    -2.44 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           10 |     3750 | 2024-06-12 | CYBERSHOKE        | L   | 0.266      | -            | -                | -                | -         |    -1.19 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            9 |     3777 | 2024-06-11 | MASONIC           | W   | 0.258      | 0.143        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     2.30 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            8 |     4152 | 2024-06-03 | Verdant           | L   | 0.208      | -            | -                | -                | -         |    -0.80 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            7 |     4214 | 2024-06-01 | Aurora Young Blud | L   | 0.193      | -            | -                | -                | -         |    -1.15 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            6 |     4236 | 2024-05-31 | VP.Prodigy        | W   | 0.187      | 0.372        | 0.010 (0.001)    | 0.065 (0.005)    | 0 (0.000) |     3.96 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            5 |     4286 | 2024-05-29 | HOTU              | L   | 0.175      | -            | -                | -                | -         |    -1.38 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            4 |     4596 | 2024-05-18 | Rhyno             | L   | 0.098      | -            | -                | -                | -         |    -0.50 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            3 |     4619 | 2024-05-17 | WOPA              | W   | 0.093      | 0.143        | 0.000 (0.000)    | 0.083 (0.001)    | 0 (0.000) |     1.49 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            2 |     4753 | 2024-05-14 | VP.Prodigy        | L   | 0.074      | -            | -                | -                | -         |    -0.82 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            1 |     4779 | 2024-05-13 | Secret            | W   | 0.068      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.45 | eightz999, facecrack, JIaYm, Raijin, w1sely |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($731.94)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: LEON<br />
Roster: facecrack, Raijin, RaY5ive, w1sely, yngsamurai<br />
Global Rank: [194](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [118]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  613.2<br />
<br />
Final Rank Value (613.2) = Starting Rank Value (633.6) + Head To Head Adjustments (-20.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.169[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 633.6
- 400 + ( ( 0.117 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 633.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      297 | 2024-10-31 | ARCRED            | L   | 1.000      | -            | -                | -                | -         |    -9.18 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|           12 |     2201 | 2024-08-26 | BetBoom           | L   | 0.673      | -            | -                | -                | -         |    -1.38 | eightz999, facecrack, JIaYm, Raijin, w1sely    |
|           11 |     3547 | 2024-07-18 | TSM               | L   | 0.411      | -            | -                | -                | -         |    -1.81 | eightz999, facecrack, JIaYm, Raijin, w1sely    |
|           10 |     3609 | 2024-07-17 | Preasy            | L   | 0.406      | -            | -                | -                | -         |    -4.04 | eightz999, facecrack, JIaYm, Raijin, w1sely    |
|            9 |     3967 | 2024-06-15 | Preasy            | L   | 0.191      | -            | -                | -                | -         |    -1.88 | eightz999, facecrack, JIaYm, Raijin, w1sely    |
|            8 |     3999 | 2024-06-14 | RUBY              | L   | 0.186      | -            | -                | -                | -         |    -1.95 | eightz999, facecrack, JIaYm, Raijin, w1sely    |
|            7 |     4060 | 2024-06-12 | CYBERSHOKE        | L   | 0.173      | -            | -                | -                | -         |    -0.97 | eightz999, facecrack, JIaYm, Raijin, w1sely    |
|            6 |     4087 | 2024-06-11 | MASONIC           | W   | 0.165      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.10 | eightz999, facecrack, JIaYm, Raijin, w1sely    |
|            5 |     4462 | 2024-06-03 | Verdant           | L   | 0.114      | -            | -                | -                | -         |    -0.54 | eightz999, facecrack, JIaYm, Raijin, w1sely    |
|            4 |     4524 | 2024-06-01 | Aurora Young Blud | L   | 0.099      | -            | -                | -                | -         |    -0.69 | eightz999, facecrack, JIaYm, Raijin, w1sely    |
|            3 |     4546 | 2024-05-31 | VP.Prodigy        | W   | 0.094      | 0.372        | 0.003 (0.000)    | 0.029 (0.001)    | 0 (0.000) |     1.75 | eightz999, facecrack, JIaYm, Raijin, w1sely    |
|            2 |     4596 | 2024-05-29 | HOTU              | L   | 0.081      | -            | -                | -                | -         |    -0.75 | eightz999, facecrack, JIaYm, Raijin, w1sely    |
|            1 |     4906 | 2024-05-18 | Rhyno             | L   | 0.005      | -            | -                | -                | -         |    -0.03 | eightz999, facecrack, JIaYm, Raijin, w1sely    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,031.20)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      1.000 | $1,533.00      | $1,533.00       |
| 2024-06-16 |      0.199 | $2,500.00      | $498.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: Into the Breach<br />
Roster: Bymas, CRUC1AL, misutaaa, rallen, Thomas<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [163](../standings_global.md)<br />
Regional Rank: [104]( ../standings_europe.md)<br />
Final Rank Value:  688.3<br />
<br />
Final Rank Value (688.3) = Starting Rank Value (677.7) + Head To Head Adjustments (10.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.240[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 677.7
- 400 + ( ( 0.132 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 677.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     3392 | 2024-02-15 | 3DMAX             | L   | 0.220      | -            | -                | -                | -         |    -0.31 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|           11 |     3433 | 2024-02-14 | BetBoom           | L   | 0.213      | -            | -                | -                | -         |    -0.03 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|           10 |     3444 | 2024-02-14 | G2                | L   | 0.212      | -            | -                | -                | -         |    -0.01 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            9 |     3536 | 2024-02-07 | ex-Preasy         | L   | 0.165      | -            | -                | -                | -         |    -1.39 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            8 |     3541 | 2024-02-06 | Metizport         | W   | 0.160      | 0.371        | 0.065 (0.004)    | 0.489 (0.029)    | 0 (0.000) |     4.15 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            7 |     3577 | 2024-02-04 | SINNERS           | W   | 0.145      | 0.371        | 0.057 (0.003)    | 0.767 (0.041)    | 0 (0.000) |     4.21 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            6 |     3638 | 2024-02-02 | Gaimin Gladiators | L   | 0.132      | -            | -                | -                | -         |    -0.30 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            5 |     3666 | 2024-02-01 | BLEED             | W   | 0.125      | 0.371        | 0.348 (0.016)    | 0.908 (0.042)    | 0 (0.000) |     3.87 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            4 |     3712 | 2024-01-29 | BIG Academy       | W   | 0.105      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.57 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            3 |     3776 | 2024-01-25 | BLEED             | L   | 0.078      | -            | -                | -                | -         |    -0.05 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            2 |     4050 | 2024-01-17 | ex-Guild Eagles   | L   | 0.028      | -            | -                | -                | -         |    -0.20 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            1 |     4054 | 2024-01-17 | Gucci Academy     | W   | 0.028      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.15 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($178.86)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: Into the Breach<br />
Roster: Bymas, CRUC1AL, misutaaa, rallen, Thomas<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [149](../standings_global.md)<br />
Regional Rank: [96]( ../standings_europe.md)<br />
Final Rank Value:  718.0<br />
<br />
Final Rank Value (718.0) = Starting Rank Value (695.2) + Head To Head Adjustments (22.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.303[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 695.2
- 400 + ( ( 0.145 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 695.2


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
|           12 |     3259 | 2024-02-15 | 3DMAX             | L   | 0.376      | -            | -                | -                | -         |    -0.68 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|           11 |     3300 | 2024-02-14 | BetBoom           | L   | 0.369      | -            | -                | -                | -         |    -0.07 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|           10 |     3311 | 2024-02-14 | G2                | L   | 0.367      | -            | -                | -                | -         |    -0.01 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            9 |     3403 | 2024-02-07 | ex-Preasy         | L   | 0.320      | -            | -                | -                | -         |    -2.64 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            8 |     3408 | 2024-02-06 | Metizport         | W   | 0.315      | 0.371        | 0.073 (0.009)    | 0.587 (0.069)    | 0 (0.000) |     8.07 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            7 |     3444 | 2024-02-04 | SINNERS           | W   | 0.301      | 0.371        | 0.045 (0.005)    | 0.782 (0.087)    | 0 (0.000) |     8.59 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            6 |     3505 | 2024-02-02 | Gaimin Gladiators | L   | 0.288      | -            | -                | -                | -         |    -0.53 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            5 |     3533 | 2024-02-01 | BLEED             | W   | 0.281      | 0.371        | 0.347 (0.036)    | 0.946 (0.098)    | 0 (0.000) |     8.64 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            4 |     3579 | 2024-01-29 | BIG Academy       | W   | 0.260      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.31 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            3 |     3643 | 2024-01-25 | BLEED             | L   | 0.234      | -            | -                | -                | -         |    -0.16 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            2 |     3917 | 2024-01-17 | ex-Guild Eagles   | L   | 0.184      | -            | -                | -                | -         |    -1.25 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            1 |     3921 | 2024-01-17 | Gucci Academy     | W   | 0.184      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.55 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($334.53)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

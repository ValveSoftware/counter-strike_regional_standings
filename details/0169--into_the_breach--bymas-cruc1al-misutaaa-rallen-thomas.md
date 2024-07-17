### Roster Details<br />
Team Name: Into the Breach<br />
Roster: Bymas, CRUC1AL, misutaaa, rallen, Thomas<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [169](../standings_global.md)<br />
Regional Rank: [109]( ../standings_europe.md)<br />
Final Rank Value:  671.8<br />
<br />
Final Rank Value (671.8) = Starting Rank Value (664.3) + Head To Head Adjustments (7.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.236[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 664.3
- 400 + ( ( 0.123 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 664.3


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
|           10 |     3556 | 2024-02-15 | 3DMAX             | L   | 0.180      | -            | -                | -                | -         |    -0.23 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            9 |     3597 | 2024-02-14 | BetBoom           | L   | 0.173      | -            | -                | -                | -         |    -0.03 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            8 |     3608 | 2024-02-14 | G2                | L   | 0.172      | -            | -                | -                | -         |    -0.00 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            7 |     3700 | 2024-02-07 | ex-Preasy         | L   | 0.125      | -            | -                | -                | -         |    -1.02 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            6 |     3705 | 2024-02-06 | Metizport         | W   | 0.120      | 0.371        | 0.064 (0.003)    | 0.478 (0.021)    | 0 (0.000) |     3.18 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            5 |     3741 | 2024-02-04 | SINNERS           | W   | 0.106      | 0.371        | 0.058 (0.002)    | 0.744 (0.029)    | 0 (0.000) |     3.08 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            4 |     3802 | 2024-02-02 | Gaimin Gladiators | L   | 0.092      | -            | -                | -                | -         |    -0.23 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            3 |     3830 | 2024-02-01 | BLEED             | W   | 0.086      | 0.371        | 0.156 (0.005)    | 0.538 (0.017)    | 0 (0.000) |     2.44 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            2 |     3876 | 2024-01-29 | BIG Academy       | W   | 0.065      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.38 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |
|            1 |     3940 | 2024-01-25 | BLEED             | L   | 0.038      | -            | -                | -                | -         |    -0.12 | Bymas, CRUC1AL, misutaaa, rallen, Thomas |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($139.25)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

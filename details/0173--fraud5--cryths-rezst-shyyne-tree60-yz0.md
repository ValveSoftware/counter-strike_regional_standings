### Roster Details<br />
Team Name: Fraud5<br />
Roster: cryths, Rezst, shyyne, Tree60, yz0<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [173](../standings_global.md)<br />
Regional Rank: [109]( ../standings_europe.md)<br />
Final Rank Value:  657.1<br />
<br />
Final Rank Value (657.1) = Starting Rank Value (662.5) + Head To Head Adjustments (-5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.023[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.5
- 400 + ( ( 0.130 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 662.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      781 | 2024-06-10 | K10            | L   | 0.907      | -            | -                | -                | -         |   -12.29 | cryths, Rezst, shyyne, Tree60, yz0    |
|           10 |     1071 | 2024-06-05 | RAPTORS EC     | W   | 0.874      | 0.282        | 0.001 (0.000)    | 0.041 (0.010)    | 0 (0.000) |    11.54 | cryths, Rezst, shyyne, Tree60, yz0    |
|            9 |     2884 | 2024-03-29 | The Neighbours | L   | 0.421      | -            | -                | -                | -         |    -5.42 | Kisynergy, Rezst, shyyne, Tree60, yz0 |
|            8 |     3067 | 2024-03-19 | RAPTORS EC     | W   | 0.354      | 0.143        | 0.000 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     3.04 | Kisynergy, Rezst, shyyne, Tree60, yz0 |
|            7 |     3308 | 2024-03-09 | Insilio        | L   | 0.286      | -            | -                | -                | -         |    -1.78 | Rezst, shyyne, SLY, Tree60, yz0       |
|            6 |     3321 | 2024-03-09 | ex-Preasy      | L   | 0.284      | -            | -                | -                | -         |    -2.41 | Rezst, shyyne, SLY, Tree60, yz0       |
|            5 |     3331 | 2024-03-08 | MOUZ NXT       | L   | 0.280      | -            | -                | -                | -         |    -0.88 | Rezst, shyyne, SLY, Tree60, yz0       |
|            4 |     3393 | 2024-03-06 | Passion UA     | L   | 0.265      | -            | -                | -                | -         |    -0.72 | Rezst, shyyne, SLY, Tree60, yz0       |
|            3 |     3445 | 2024-03-04 | Secret         | W   | 0.253      | 0.371        | 0.000 (0.000)    | 0.074 (0.007)    | 0 (0.000) |     2.76 | Rezst, shyyne, SLY, Tree60, yz0       |
|            2 |     3601 | 2024-02-25 | The Neighbours | L   | 0.199      | -            | -                | -                | -         |    -2.73 | Rezst, shyyne, SLY, Tree60, yz0       |
|            1 |     3629 | 2024-02-24 | The Neighbours | W   | 0.193      | 0.307        | 0.005 (0.000)    | 0.046 (0.003)    | 1 (0.193) |     3.47 | Rezst, shyyne, SLY, Tree60, yz0       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,504.68)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.907 | $954.00        | $865.54         |
| 2024-03-29 |      0.421 | $951.00        | $400.47         |
| 2024-02-25 |      0.199 | $1,197.00      | $238.66         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

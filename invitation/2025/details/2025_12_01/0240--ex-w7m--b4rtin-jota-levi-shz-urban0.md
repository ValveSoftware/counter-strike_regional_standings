### Roster Details<br />
Team Name: ex-W7M<br />
Roster: b4rtiN, JOTA, levi, shz, urban0<br />
Global Rank: [240](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [65]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  552.6<br />
<br />
Final Rank Value (552.6) = Starting Rank Value (529.3) + Head To Head Adjustments (23.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 529.3
- 400 + ( ( 0.068 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 529.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     4136 | 2025-07-11 | Imperial       | L   | 0.247      | -            | -                | -                | -         |    -0.07 | b4rtiN, JOTA, levi, shz, urban0 |
|            8 |     4177 | 2025-07-09 | BESTIA         | L   | 0.235      | -            | -                | -                | -         |    -0.34 | b4rtiN, JOTA, levi, shz, urban0 |
|            7 |     4181 | 2025-07-09 | Galorys        | W   | 0.234      | 0.616        | 0.004 (0.001)    | 0.625 (0.090)    | 0 (0.000) |     6.80 | b4rtiN, JOTA, levi, shz, urban0 |
|            6 |     4212 | 2025-07-08 | BESTIA         | L   | 0.227      | -            | -                | -                | -         |    -0.31 | b4rtiN, JOTA, levi, shz, urban0 |
|            5 |     4221 | 2025-07-07 | Bounty Hunters | W   | 0.221      | 0.376        | 0.015 (0.001)    | 0.615 (0.051)    | 0 (0.000) |     6.21 | b4rtiN, JOTA, levi, shz, urban0 |
|            4 |     4225 | 2025-07-07 | Imperial       | W   | 0.220      | 0.376        | 0.078 (0.006)    | 0.579 (0.048)    | 0 (0.000) |     6.87 | b4rtiN, JOTA, levi, shz, urban0 |
|            3 |     4271 | 2025-06-30 | Bounty Hunters | L   | 0.175      | -            | -                | -                | -         |    -0.59 | b4rtiN, JOTA, levi, shz, urban0 |
|            2 |     4277 | 2025-06-29 | RED Canids     | L   | 0.169      | -            | -                | -                | -         |    -0.17 | b4rtiN, JOTA, levi, shz, urban0 |
|            1 |     4280 | 2025-06-29 | Galorys        | W   | 0.166      | 0.616        | 0.004 (0.000)    | 0.625 (0.064)    | 0 (0.000) |     4.89 | b4rtiN, JOTA, levi, shz, urban0 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

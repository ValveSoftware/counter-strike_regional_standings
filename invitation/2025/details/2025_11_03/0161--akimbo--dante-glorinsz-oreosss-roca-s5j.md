### Roster Details<br />
Team Name: Akimbo<br />
Roster: Dante, glorinsz, oreosss, roca, S5J<br />
Global Rank: [161](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_11_03.md)<br />
Regional Rank: [40]( ../../standings_americas_2025_11_03.md)<br />
<br />
Final Rank Value:  667.0<br />
<br />
Final Rank Value (667.0) = Starting Rank Value (677.5) + Head To Head Adjustments (-10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.069[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 677.5
- 400 + ( ( 0.148 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 677.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1543 | 2025-09-12 | Wanted Goons  | L   | 0.856      | -            | -                | -                | -         |   -17.30 | Dante, glorinsz, oreosss, roca, S5J   |
|            6 |     1586 | 2025-09-11 | Wildcard      | L   | 0.849      | -            | -                | -                | -         |    -2.95 | glorinsz, Mexican, oreosss, roca, S5J |
|            5 |     1691 | 2025-09-09 | BOSS          | W   | 0.836      | 0.363        | 0.006 (0.002)    | 0.402 (0.122)    | 0 (0.000) |    16.48 | Dante, glorinsz, oreosss, roca, S5J   |
|            4 |     1745 | 2025-09-08 | Arrival Seven | W   | 0.829      | 0.363        | 0.000 (0.000)    | 0.066 (0.020)    | 0 (0.000) |     9.38 | Dante, glorinsz, oreosss, roca, S5J   |
|            3 |     2213 | 2025-08-17 | Zomblers      | W   | 0.682      | 0.300        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.682) |     6.66 | Dante, glorinsz, oreosss, roca, S5J   |
|            2 |     2386 | 2025-08-13 | Take Flyte    | L   | 0.656      | -            | -                | -                | -         |   -13.51 | Dante, glorinsz, oreosss, roca, S5J   |
|            1 |     2494 | 2025-08-11 | LAG           | L   | 0.642      | -            | -                | -                | -         |    -9.28 | Dante, glorinsz, oreosss, roca, S5J   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,558.85)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-17 |      0.682 | $3,750.00      | $2,558.85       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

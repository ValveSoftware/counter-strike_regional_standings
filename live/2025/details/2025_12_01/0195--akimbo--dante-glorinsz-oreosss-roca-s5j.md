### Roster Details<br />
Team Name: Akimbo<br />
Roster: Dante, gloRinsz, oreosss, roca, S5J<br />
Global Rank: [195](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [49]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  661.0<br />
<br />
Final Rank Value (661.0) = Starting Rank Value (668.0) + Head To Head Adjustments (-6.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.050[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 668.0
- 400 + ( ( 0.141 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 668.0


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
|            7 |     2564 | 2025-09-12 | Wanted Goons  | L   | 0.669      | -            | -                | -                | -         |   -13.55 | Dante, gloRinsz, oreosss, roca, S5J   |
|            6 |     2607 | 2025-09-11 | Wildcard      | L   | 0.662      | -            | -                | -                | -         |    -2.68 | gloRinsz, Mexican, oreosss, roca, S5J |
|            5 |     2712 | 2025-09-09 | BOSS          | W   | 0.649      | 0.363        | 0.009 (0.002)    | 0.455 (0.107)    | 0 (0.000) |    13.40 | Dante, gloRinsz, oreosss, roca, S5J   |
|            4 |     2766 | 2025-09-08 | Arrival Seven | W   | 0.642      | 0.363        | 0.000 (0.000)    | 0.041 (0.010)    | 0 (0.000) |     6.06 | Dante, gloRinsz, oreosss, roca, S5J   |
|            3 |     3234 | 2025-08-17 | Zomblers      | W   | 0.496      | 0.300        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.496) |     4.89 | Dante, gloRinsz, oreosss, roca, S5J   |
|            2 |     3407 | 2025-08-13 | Take Flyte    | L   | 0.469      | -            | -                | -                | -         |    -8.70 | Dante, gloRinsz, oreosss, roca, S5J   |
|            1 |     3515 | 2025-08-11 | LAG           | L   | 0.455      | -            | -                | -                | -         |    -6.35 | Dante, gloRinsz, oreosss, roca, S5J   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,858.92)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-17 |      0.496 | $3,750.00      | $1,858.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

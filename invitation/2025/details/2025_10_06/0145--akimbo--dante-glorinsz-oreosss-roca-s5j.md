### Roster Details<br />
Team Name: Akimbo<br />
Roster: Dante, glorinsz, oreosss, roca, S5J<br />
Global Rank: [145](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_06.md)<br />
Regional Rank: [36]( ../../standings_americas_2025_10_06.md)<br />
<br />
Final Rank Value:  709.9<br />
<br />
Final Rank Value (709.9) = Starting Rank Value (726.6) + Head To Head Adjustments (-16.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.089[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 726.6
- 400 + ( ( 0.167 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 726.6


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
|            7 |      659 | 2025-09-12 | Wanted Goons  | L   | 1.000      | -            | -                | -                | -         |   -21.50 | Dante, glorinsz, oreosss, roca, S5J   |
|            6 |      701 | 2025-09-11 | Wildcard      | L   | 1.000      | -            | -                | -                | -         |    -2.44 | glorinsz, Mexican, oreosss, roca, S5J |
|            5 |      794 | 2025-09-09 | BOSS          | W   | 1.000      | 0.363        | 0.009 (0.003)    | 0.491 (0.178)    | 0 (0.000) |    19.28 | Dante, glorinsz, oreosss, roca, S5J   |
|            4 |      846 | 2025-09-08 | Arrival Seven | W   | 1.000      | 0.363        | 0.002 (0.001)    | 0.098 (0.036)    | 0 (0.000) |    10.73 | Dante, glorinsz, oreosss, roca, S5J   |
|            3 |     1314 | 2025-08-17 | Zomblers      | W   | 0.869      | 0.300        | 0.002 (0.001)    | 0.000 (0.000)    | 1 (0.869) |     7.60 | Dante, glorinsz, oreosss, roca, S5J   |
|            2 |     1487 | 2025-08-13 | Take Flyte    | L   | 0.843      | -            | -                | -                | -         |   -18.23 | Dante, glorinsz, oreosss, roca, S5J   |
|            1 |     1594 | 2025-08-11 | LAG           | L   | 0.829      | -            | -                | -                | -         |   -12.12 | Dante, glorinsz, oreosss, roca, S5J   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,260.62)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-17 |      0.869 | $3,750.00      | $3,260.62       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

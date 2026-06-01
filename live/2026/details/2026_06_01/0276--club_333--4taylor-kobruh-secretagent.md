### Roster Details<br />
Team Name: Club 333<br />
Roster: 4TAYLOR, kobruh, SecretAgent<br />
Global Rank: [276](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [67]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  596.3<br />
<br />
Final Rank Value (596.3) = Starting Rank Value (581.8) + Head To Head Adjustments (14.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.198[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.095<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 581.8
- 400 + ( ( 0.095 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 581.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1794 | 2026-04-05 | FarmVille    | L   | 0.823      | -            | -                | -                | -         |    -6.57 | 4TAYLOR, kobruh, Majesticzz, Marro, SecretAgent   |
|            5 |     1852 | 2026-04-04 | TSG          | W   | 0.816      | 0.363        | 0.000 (0.000)    | 0.027 (0.008)    | 0 (0.000) |     9.84 | 4TAYLOR, kobruh, Majesticzz, Marro, SecretAgent   |
|            4 |     1938 | 2026-04-03 | Shimmer      | W   | 0.809      | 0.363        | 0.000 (0.000)    | 0.057 (0.017)    | 0 (0.000) |    10.83 | 4TAYLOR, kobruh, Majesticzz, Marro, SecretAgent   |
|            3 |     2016 | 2026-04-02 | LAG          | L   | 0.803      | -            | -                | -                | -         |    -1.34 | 4TAYLOR, kobruh, Majesticzz, Marro, SecretAgent   |
|            2 |     5978 | 2025-12-14 | LAG          | L   | 0.075      | -            | -                | -                | -         |    -0.10 | 4TAYLOR, freakazoid, HorizoN, kobruh, SecretAgent |
|            1 |     6005 | 2025-12-12 | Chicken Coop | W   | 0.062      | 0.278        | 0.014 (0.000)    | 0.295 (0.005)    | 0 (0.000) |     1.81 | 4TAYLOR, freakazoid, HorizoN, kobruh, SecretAgent |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($56.54)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-14 |      0.075 | $750.00        | $56.54          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

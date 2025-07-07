### Roster Details<br />
Team Name: NomadS<br />
Roster: CRYTICAL, HenX, hoolig4n, KRST, shinobi<br />
Global Rank: [185](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [27]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  607.2<br />
<br />
Final Rank Value (607.2) = Starting Rank Value (606.3) + Head To Head Adjustments (0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.170[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 606.3
- 400 + ( ( 0.111 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 606.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3559 | 2025-02-08 | IHC        | L   | 0.205      | -            | -                | -                | -         |    -2.89 | CRYTICAL, HenX, hoolig4n, KRST, shinobi |
|            6 |     3877 | 2025-01-23 | TYLOO      | L   | 0.099      | -            | -                | -                | -         |    -0.03 | CRYTICAL, HenX, hoolig4n, KRST, shinobi |
|            5 |     3882 | 2025-01-23 | TYLOO      | L   | 0.099      | -            | -                | -                | -         |    -0.03 | CRYTICAL, HenX, hoolig4n, KRST, shinobi |
|            4 |     3906 | 2025-01-22 | Just Swing | W   | 0.092      | 0.417        | 0.001 (0.000)    | 0.169 (0.006)    | 0 (0.000) |     1.90 | CRYTICAL, HenX, hoolig4n, KRST, shinobi |
|            3 |     3911 | 2025-01-22 | Just Swing | L   | 0.092      | -            | -                | -                | -         |    -1.01 | CRYTICAL, HenX, hoolig4n, KRST, shinobi |
|            2 |     3940 | 2025-01-21 | THE        | W   | 0.086      | 0.417        | 0.001 (0.000)    | 0.101 (0.004)    | 0 (0.000) |     1.50 | CRYTICAL, HenX, hoolig4n, KRST, shinobi |
|            1 |     3946 | 2025-01-21 | THE        | W   | 0.085      | 0.417        | 0.001 (0.000)    | 0.101 (0.004)    | 0 (0.000) |     1.50 | CRYTICAL, HenX, hoolig4n, KRST, shinobi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,003.33)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      0.772 | $1,300.00      | $1,003.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

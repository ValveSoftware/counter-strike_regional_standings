### Roster Details<br />
Team Name: Rebels<br />
Roster: Icarus, NOPEEJ, snapy, stadodo<br />
Global Rank: [151](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [103]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  788.1<br />
<br />
Final Rank Value (788.1) = Starting Rank Value (772.8) + Head To Head Adjustments (15.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.239[<sup>2</sup>](#table1)

The average of these factors is 0.188<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 772.8
- 400 + ( ( 0.188 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 772.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      128 | 2025-12-20 | Impulse GW   | L   | 1.000      | -            | -                | -                | -         |   -17.12 | Icarus, nesto, NOPEEJ, snapy, stadodo |
|            5 |      138 | 2025-12-20 | Gentle Mates | L   | 1.000      | -            | -                | -                | -         |    -0.68 | Icarus, nesto, NOPEEJ, snapy, stadodo |
|            4 |      139 | 2025-12-20 | Impulse GW   | W   | 1.000      | 0.309        | 0.002 (0.001)    | 0.109 (0.034)    | 1 (1.000) |    14.05 | Icarus, nesto, NOPEEJ, snapy, stadodo |
|            3 |     1976 | 2025-10-12 | Famalicão    | W   | 0.634      | 0.317        | 0.003 (0.001)    | 0.072 (0.015)    | 1 (0.634) |     9.30 | Icarus, NOPEEJ, roman, snapy, stadodo |
|            2 |     1997 | 2025-10-11 | Impulse GW   | W   | 0.627      | 0.317        | 0.002 (0.000)    | 0.109 (0.022)    | 1 (0.627) |     9.89 | Icarus, NOPEEJ, roman, snapy, stadodo |
|            1 |     3065 | 2025-09-14 | Gentle Mates | L   | 0.445      | -            | -                | -                | -         |    -0.23 | Icarus, NOPEEJ, snapy, stadodo, TMKj  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,846.91)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-12 |      0.634 | $2,914.00      | $1,846.91       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: 500<br />
Roster: CeRq, Rainwaker, REDSTAR, volt<br />
Global Rank: [278](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [178]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  603.4<br />
<br />
Final Rank Value (603.4) = Starting Rank Value (603.5) + Head To Head Adjustments (-0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.250[<sup>1</sup>](#table2)
- Bounty Collected: 0.166[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.104<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 603.5
- 400 + ( ( 0.104 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 603.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4952 | 2025-11-04 | Nuclear TigeRES | L   | 0.181      | -            | -                | -                | -         |    -0.07 | CeRq, POP0V, Rainwaker, REDSTAR, volt    |
|            5 |     5615 | 2025-10-14 | Nemesis         | L   | 0.041      | -            | -                | -                | -         |    -0.01 | CeRq, POP0V, Rainwaker, REDSTAR, volt    |
|            4 |     5648 | 2025-10-13 | Oramond         | L   | 0.034      | -            | -                | -                | -         |    -0.17 | CeRq, chawzyyy, Rainwaker, REDSTAR, volt |
|            3 |     5703 | 2025-10-10 | Sangal          | L   | 0.014      | -            | -                | -                | -         |    -0.09 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|            2 |     5750 | 2025-10-09 | Leo             | W   | 0.008      | 0.384        | 0.017 (0.000)    | 0.593 (0.002)    | 0 (0.000) |     0.20 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|            1 |     5800 | 2025-10-08 | EYEBALLERS      | W   | 0.001      | 0.384        | 0.097 (0.000)    | 0.599 (0.000)    | 0 (0.000) |     0.04 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($466.43)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-09 |      0.215 | $2,000.00      | $429.22         |
| 2025-10-19 |      0.074 | $500.00        | $37.21          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

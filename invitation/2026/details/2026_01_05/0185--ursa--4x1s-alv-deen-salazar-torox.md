### Roster Details<br />
Team Name: Ursa<br />
Roster: 4X1s, Alv, deeN, Salazar, torox<br />
Global Rank: [185](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [122]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  694.3<br />
<br />
Final Rank Value (694.3) = Starting Rank Value (690.8) + Head To Head Adjustments (3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 690.8
- 400 + ( ( 0.147 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 690.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      286 | 2025-12-09 | QWENTRY   | L   | 1.000      | -            | -                | -                | -         |   -13.13 | 4X1s, Alv, deeN, Salazar, torox |
|            4 |      302 | 2025-12-08 | Nemiga    | W   | 1.000      | 0.377        | 0.085 (0.032)    | 0.673 (0.254)    | 0 (0.000) |    27.92 | 4X1s, Alv, deeN, Salazar, torox |
|            3 |      310 | 2025-12-08 | ALLINNERS | L   | 1.000      | -            | -                | -                | -         |    -6.42 | 4X1s, Alv, deeN, Salazar, torox |
|            2 |      610 | 2025-11-25 | RUBY      | L   | 0.925      | -            | -                | -                | -         |    -3.58 | 4X1s, Alv, deeN, Salazar, torox |
|            1 |      649 | 2025-11-24 | GUN5      | L   | 0.919      | -            | -                | -                | -         |    -1.29 | 4X1s, Alv, deeN, Salazar, torox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($989.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-09 |      1.000 | $989.00        | $989.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: Peekaboo<br />
Roster: Hikomi, julih, LETi<br />
Global Rank: [274](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [175]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  613.1<br />
<br />
Final Rank Value (613.1) = Starting Rank Value (621.8) + Head To Head Adjustments (-8.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 621.8
- 400 + ( ( 0.113 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 621.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2657 | 2026-02-12 | Fingers Crossed fe | L   | 0.849      | -            | -                | -                | -         |   -12.84 | Hikomi, julih, LETi, Nem1za, Zana    |
|            4 |     2708 | 2026-02-11 | Pigeons            | L   | 0.841      | -            | -                | -                | -         |    -8.19 | Hikomi, julih, LETi, Nem1za, Zana    |
|            3 |     2769 | 2026-02-09 | Fingers Crossed fe | W   | 0.828      | 0.384        | 0.002 (0.001)    | 0.067 (0.021)    | 0 (0.000) |    13.08 | Hikomi, julih, LETi, Nem1za, Zana    |
|            2 |     5337 | 2025-10-24 | BIG EQUIPA         | L   | 0.108      | -            | -                | -                | -         |    -0.79 | Angelka, Hikomi, julih, LETi, NAYLLA |
|            1 |     5746 | 2025-10-09 | Nemesis Impact     | W   | 0.008      | 0.523        | 0.001 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     0.13 | Angelka, Hikomi, julih, LETi, NAYLLA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($610.01)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      0.868 | $500.00        | $433.83         |
| 2025-10-26 |      0.122 | $1,450.00      | $176.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

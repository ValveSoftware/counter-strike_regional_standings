### Roster Details<br />
Team Name: Sensation<br />
Roster: ncl, Tsogoo<br />
Global Rank: [268](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_06.md)<br />
Regional Rank: [30]( ../../standings_asia_2026_07_06.md)<br />
<br />
Final Rank Value:  633.5<br />
<br />
Final Rank Value (633.5) = Starting Rank Value (631.1) + Head To Head Adjustments (2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.218[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.049[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.1
- 400 + ( ( 0.123 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 631.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1838 | 2026-04-27 | The QUBE | L   | 0.732      | -            | -                | -                | -         |    -7.58 | ncl, sKINEE, Tsogoo, Veccil, Zilkenberg |
|            4 |     1903 | 2026-04-26 | TYLOO    | L   | 0.726      | -            | -                | -                | -         |    -0.33 | ncl, sKINEE, Tsogoo, Veccil, Zilkenberg |
|            3 |     3625 | 2026-03-20 | The Huns | L   | 0.478      | -            | -                | -                | -         |    -1.15 | hasteka, ncl, sKINEE, Tsogoo, yAmi      |
|            2 |     3693 | 2026-03-18 | 5star    | W   | 0.467      | 0.308        | 0.019 (0.003)    | 0.324 (0.047)    | 1 (0.467) |    13.54 | hasteka, ncl, sKINEE, Tsogoo, yAmi      |
|            1 |     3757 | 2026-03-17 | NEXVOID  | L   | 0.459      | -            | -                | -                | -         |    -2.08 | hasteka, ncl, rate, Tsogoo, yAmi        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($142.18)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-22 |      0.492 | $289.00        | $142.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

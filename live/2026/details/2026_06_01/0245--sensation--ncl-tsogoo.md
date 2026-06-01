### Roster Details<br />
Team Name: Sensation<br />
Roster: ncl, Tsogoo<br />
Global Rank: [245](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [29]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  664.3<br />
<br />
Final Rank Value (664.3) = Starting Rank Value (655.1) + Head To Head Adjustments (9.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.224[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.072[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 655.1
- 400 + ( ( 0.134 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 655.1


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
|            5 |     1177 | 2026-04-27 | The QUBE | L   | 0.965      | -            | -                | -                | -         |    -8.18 | ncl, sKINEE, Tsogoo, Veccil, Zilkenberg |
|            4 |     1242 | 2026-04-26 | TYLOO    | L   | 0.959      | -            | -                | -                | -         |    -0.55 | ncl, sKINEE, Tsogoo, Veccil, Zilkenberg |
|            3 |     2964 | 2026-03-20 | The Huns | L   | 0.711      | -            | -                | -                | -         |    -1.28 | hasteka, ncl, sKINEE, Tsogoo, yAmi      |
|            2 |     3032 | 2026-03-18 | 5star    | W   | 0.700      | 0.308        | 0.023 (0.005)    | 0.395 (0.085)    | 1 (0.700) |    20.89 | hasteka, ncl, sKINEE, Tsogoo, yAmi      |
|            1 |     3096 | 2026-03-17 | NEXVOID  | L   | 0.692      | -            | -                | -                | -         |    -1.65 | hasteka, ncl, rate, Tsogoo, yAmi        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($209.54)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-22 |      0.725 | $289.00        | $209.54         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

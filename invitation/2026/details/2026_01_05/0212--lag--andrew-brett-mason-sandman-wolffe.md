### Roster Details<br />
Team Name: LAG<br />
Roster: Andrew, brett, mason, Sandman, Wolffe<br />
Global Rank: [212](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [51]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  638.8<br />
<br />
Final Rank Value (638.8) = Starting Rank Value (619.9) + Head To Head Adjustments (18.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.252[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.007[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 619.9
- 400 + ( ( 0.111 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 619.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     3870 | 2025-08-15 | Take Flyte          | W   | 0.249      | 0.363        | 0.000 (0.000)    | 0.020 (0.002)    | 0 (0.000) |     2.45 | Aureo, brett, mason, Sandman, Wolffe  |
|           16 |     3878 | 2025-08-15 | InControl           | W   | 0.249      | 0.278        | 0.001 (0.000)    | 0.200 (0.014)    | 0 (0.000) |     4.71 | brett, consti, mason, Sandman, Wolffe |
|           15 |     3919 | 2025-08-14 | NRG                 | L   | 0.243      | -            | -                | -                | -         |    -0.09 | Andrew, brett, mason, Sandman, Wolffe |
|           14 |     3965 | 2025-08-13 | OverKnight          | W   | 0.236      | 0.333        | 0.000 (0.000)    | 0.266 (0.021)    | 0 (0.000) |     4.43 | brett, consti, mason, Sandman, Wolffe |
|           13 |     4019 | 2025-08-12 | Arrival Seven       | W   | 0.230      | 0.363        | 0.000 (0.000)    | 0.016 (0.001)    | 0 (0.000) |     2.53 | Andrew, brett, mason, Sandman, Wolffe |
|           12 |     4075 | 2025-08-11 | Akimbo              | W   | 0.222      | 0.363        | 0.002 (0.000)    | 0.045 (0.004)    | 0 (0.000) |     3.88 | brett, consti, mason, Sandman, Wolffe |
|           11 |     4305 | 2025-07-30 | Wildcard            | L   | 0.142      | -            | -                | -                | -         |    -0.71 | Andrew, brett, mason, Sandman, Wolffe |
|           10 |     4332 | 2025-07-28 | MIGHT               | W   | 0.129      | 0.616        | 0.000 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     0.92 | Andrew, brett, mason, Sandman, Wolffe |
|            9 |     4397 | 2025-07-26 | Marsborne           | L   | 0.115      | -            | -                | -                | -         |    -0.14 | Andrew, brett, mason, Sandman, Wolffe |
|            8 |     4427 | 2025-07-24 | Party Astronauts    | W   | 0.103      | 0.616        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.73 | brett, consti, mason, Sandman, Wolffe |
|            7 |     4494 | 2025-07-19 | Marsborne           | L   | 0.067      | -            | -                | -                | -         |    -0.08 | brett, consti, mason, Sandman, Wolffe |
|            6 |     4524 | 2025-07-18 | Derpy diamond dudes | W   | 0.062      | 0.407        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.062) |     0.44 | brett, consti, mason, Sandman, Wolffe |
|            5 |     4532 | 2025-07-18 | Marsborne           | L   | 0.061      | -            | -                | -                | -         |    -0.07 | brett, consti, mason, Sandman, Wolffe |
|            4 |     4640 | 2025-07-13 | SkinRave            | L   | 0.028      | -            | -                | -                | -         |    -0.17 | brett, consti, mason, Sandman, Wolffe |
|            3 |     4657 | 2025-07-12 | Arrival Seven       | W   | 0.022      | 0.624        | 0.000 (0.000)    | 0.016 (0.000)    | 0 (0.000) |     0.25 | brett, consti, mason, Sandman, Wolffe |
|            2 |     4659 | 2025-07-12 | Getting Info        | L   | 0.022      | -            | -                | -                | -         |    -0.30 | brett, consti, mason, Sandman, Wolffe |
|            1 |     4690 | 2025-07-11 | Party Astronauts    | W   | 0.015      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.11 | brett, consti, mason, Sandman, Wolffe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($457.98)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-17 |      0.262 | $1,750.00      | $457.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

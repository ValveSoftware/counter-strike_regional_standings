### Roster Details<br />
Team Name: Arise<br />
Roster: Anasasis, Bhavi, borosto, clouda, EmbeR<br />
Global Rank: [242](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [29]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  665.5<br />
<br />
Final Rank Value (665.5) = Starting Rank Value (649.4) + Head To Head Adjustments (16.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 649.4
- 400 + ( ( 0.127 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 649.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2241 | 2026-02-20 | The QUBE        | L   | 0.900      | -            | -                | -                | -         |    -7.80 | Anasasis, Bhavi, borosto, clouda, EmbeR |
|           12 |     2296 | 2026-02-19 | BMZ             | W   | 0.893      | 0.333        | 0.012 (0.004)    | 0.275 (0.082)    | 0 (0.000) |    24.44 | Anasasis, Bhavi, borosto, clouda, EmbeR |
|           11 |     2356 | 2026-02-18 | Deep Cross      | W   | 0.886      | 0.333        | 0.002 (0.001)    | 0.013 (0.004)    | 0 (0.000) |    12.59 | Anasasis, Bhavi, borosto, clouda, EmbeR |
|           10 |     2413 | 2026-02-17 | Change The Game | L   | 0.880      | -            | -                | -                | -         |    -5.33 | Anasasis, Bhavi, borosto, clouda, EmbeR |
|            9 |     3206 | 2026-01-25 | Legion          | L   | 0.725      | -            | -                | -                | -         |   -10.40 | Anasasis, Bhavi, borosto, EmbeR, Ph1NNN |
|            8 |     3207 | 2026-01-24 | Flshbck         | W   | 0.724      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.50 | Anasasis, Bhavi, borosto, EmbeR, Ph1NNN |
|            7 |     3794 | 2025-12-21 | Legion          | W   | 0.491      | 0.262        | 0.003 (0.000)    | 0.241 (0.031)    | 0 (0.000) |     8.55 | Anasasis, Bhavi, borosto, EmbeR, Ph1NNN |
|            6 |     3796 | 2025-12-20 | WahWah          | W   | 0.491      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.24 | Anasasis, Bhavi, borosto, EmbeR, Ph1NNN |
|            5 |     4171 | 2025-11-29 | Legion          | L   | 0.351      | -            | -                | -                | -         |    -5.07 | Benzene, Bhavi, clouda, EmbeR, reV3nnnn |
|            4 |     4764 | 2025-11-08 | Unitronics      | L   | 0.207      | -            | -                | -                | -         |    -4.55 | Benzene, Bhavi, clouda, EmbeR, reV3nnnn |
|            3 |     4784 | 2025-11-08 | BIG             | L   | 0.205      | -            | -                | -                | -         |    -2.41 | Benzene, Bhavi, clouda, EmbeR, reV3nnnn |
|            2 |     5356 | 2025-10-24 | Just Swing      | L   | 0.106      | -            | -                | -                | -         |    -1.24 | Benzene, Bhavi, clouda, EmbeR, reV3nnnn |
|            1 |     5402 | 2025-10-23 | Morningstar     | L   | 0.100      | -            | -                | -                | -         |    -0.40 | Benzene, Bhavi, clouda, EmbeR, reV3nnnn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($853.89)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-25 |      0.725 | $500.00        | $362.48         |
| 2025-12-21 |      0.491 | $1,000.00      | $491.41         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

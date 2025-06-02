### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, FaNg, ogwizard, viz, Walco<br />
Global Rank: [119](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [31]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  737.0<br />
<br />
Final Rank Value (737.0) = Starting Rank Value (678.0) + Head To Head Adjustments (59.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.005[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 678.0
- 400 + ( ( 0.152 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 678.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     2958 | 2025-02-10 | MIGHT         | L   | 0.460      | -            | -                | -                | -         |    -7.81 | ben1337, FaNg, ogwizard, viz, Walco    |
|           20 |     3004 | 2025-02-09 | Chicken Coop  | W   | 0.452      | 0.143        | -                | 0.303 (0.020)    | 0 (0.000) |     6.68 | ben1337, FaNg, ogwizard, viz, Walco    |
|           19 |     3028 | 2025-02-08 | Akimbo        | W   | 0.447      | 0.143        | 0.007 (0.000)    | -                | 0 (0.000) |     6.46 | ben1337, FaNg, ogwizard, viz, Walco    |
|           18 |     3036 | 2025-02-08 | LFO 4         | W   | 0.446      | 0.143        | 0.010 (0.001)    | 0.493 (0.031)    | 0 (0.000) |     9.22 | ben1337, FaNg, ogwizard, viz, Walco    |
|           17 |     3051 | 2025-02-08 | MIGHT         | W   | 0.445      | 0.143        | -                | 0.315 (0.020)    | 0 (0.000) |     6.76 | ben1337, FaNg, ogwizard, viz, Walco    |
|           16 |     3259 | 2025-01-28 | LFO 4         | W   | 0.374      | 0.477        | 0.010 (0.002)    | 0.493 (0.088)    | 0 (0.000) |     8.02 | ben1337, FaNg, ogwizard, viz, Walco    |
|           15 |     3264 | 2025-01-28 | LFO 4         | L   | 0.374      | -            | -                | -                | -         |    -3.80 | ben1337, FaNg, ogwizard, viz, Walco    |
|           14 |     3297 | 2025-01-27 | Vagrants      | W   | 0.367      | 0.477        | 0.016 (0.003)    | 0.384 (0.067)    | 0 (0.000) |     7.02 | ben1337, FaNg, ogwizard, viz, Walco    |
|           13 |     3302 | 2025-01-27 | Vagrants      | L   | 0.367      | -            | -                | -                | -         |    -4.63 | ben1337, FaNg, ogwizard, viz, Walco    |
|           12 |     3335 | 2025-01-24 | Chicken Coop  | W   | 0.347      | 0.477        | 0.002 (0.000)    | 0.303 (0.050)    | 0 (0.000) |     5.74 | ben1337, FaNg, ogwizard, viz, Walco    |
|           11 |     3340 | 2025-01-24 | Chicken Coop  | W   | 0.347      | 0.477        | 0.002 (0.000)    | 0.303 (0.050)    | 0 (0.000) |     5.92 | ben1337, FaNg, ogwizard, viz, Walco    |
|           10 |     3377 | 2025-01-23 | Worms         | W   | 0.341      | 0.477        | 0.001 (0.000)    | 0.104 (0.017)    | -         |     4.49 | ben1337, FaNg, ogwizard, viz, Walco    |
|            9 |     3382 | 2025-01-23 | Worms         | W   | 0.340      | 0.477        | 0.001 (0.000)    | -                | -         |     4.62 | ben1337, FaNg, ogwizard, viz, Walco    |
|            8 |     3446 | 2025-01-21 | Akimbo        | W   | 0.327      | 0.477        | 0.007 (0.001)    | 0.162 (0.025)    | -         |     5.26 | ben1337, FaNg, ogwizard, viz, Walco    |
|            7 |     3449 | 2025-01-21 | Akimbo        | W   | 0.327      | 0.477        | 0.007 (0.001)    | 0.162 (0.025)    | -         |     5.41 | ben1337, FaNg, ogwizard, viz, Walco    |
|            6 |     3656 | 2024-12-15 | NRG           | L   | 0.079      | -            | -                | -                | -         |    -0.26 | ben1337, FaNg, Infinite, ogwizard, viz |
|            5 |     3677 | 2024-12-14 | FLUFFY AIMERS | W   | 0.074      | -            | -                | -                | -         |     0.58 | ben1337, FaNg, Infinite, ogwizard, viz |
|            4 |     3793 | 2024-12-07 | FLUFFY AIMERS | L   | 0.028      | -            | -                | -                | -         |    -0.66 | ben1337, FaNg, Infinite, ogwizard, viz |
|            3 |     3799 | 2024-12-07 | Anti-Eco Club | W   | 0.027      | -            | -                | -                | 1 (0.027) |     0.15 | ben1337, FaNg, Infinite, ogwizard, viz |
|            2 |     3803 | 2024-12-07 | Nouns         | L   | 0.026      | -            | -                | -                | -         |    -0.34 | ben1337, FaNg, Infinite, ogwizard, viz |
|            1 |     3834 | 2024-12-06 | Take Flyte    | W   | 0.020      | -            | -                | -                | 1 (0.020) |     0.18 | ben1337, FaNg, Infinite, ogwizard, viz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,000.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      1.000 | $3,000.00      | $3,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

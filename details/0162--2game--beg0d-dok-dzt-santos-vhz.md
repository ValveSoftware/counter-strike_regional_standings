### Roster Details<br />
Team Name: 2GAME<br />
Roster: beg0d, dok, dzt, santos, vhz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [162](../standings_global.md)<br />
Regional Rank: [45]( ../standings_americas.md)<br />
Final Rank Value:  683.7<br />
<br />
Final Rank Value (683.7) = Starting Rank Value (687.5) + Head To Head Adjustments (-3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.283[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.5
- 400 + ( ( 0.142 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 687.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     2562 | 2024-04-10 | RED Canids  | L   | 0.501      | -            | -                | -                | -         |    -1.23 | beg0d, dok, dzt, santos, vhz |
|           20 |     2566 | 2024-04-10 | RED Canids  | L   | 0.501      | -            | -                | -                | -         |    -1.24 | beg0d, dok, dzt, santos, vhz |
|           19 |     2724 | 2024-04-05 | adalYamigos | W   | 0.468      | 0.450        | 0.000 (0.000)    | 0.091 (0.019)    | 0 (0.000) |     6.85 | beg0d, dok, dzt, santos, vhz |
|           18 |     2725 | 2024-04-05 | adalYamigos | L   | 0.467      | -            | -                | -                | -         |    -8.07 | beg0d, dok, dzt, santos, vhz |
|           17 |     2792 | 2024-04-03 | Sharks      | L   | 0.455      | -            | -                | -                | -         |    -2.31 | beg0d, dok, dzt, santos, vhz |
|           16 |     2795 | 2024-04-03 | Sharks      | L   | 0.454      | -            | -                | -                | -         |    -2.36 | beg0d, dok, dzt, santos, vhz |
|           15 |     2927 | 2024-03-27 | Corinthians | W   | 0.408      | 0.450        | 0.000 (0.000)    | 0.058 (0.011)    | 0 (0.000) |     3.50 | beg0d, dok, dzt, santos, vhz |
|           14 |     2930 | 2024-03-27 | Corinthians | L   | 0.408      | -            | -                | -                | -         |    -9.54 | beg0d, dok, dzt, santos, vhz |
|           13 |     2968 | 2024-03-26 | Galorys     | L   | 0.402      | -            | -                | -                | -         |    -3.58 | beg0d, dok, dzt, santos, vhz |
|           12 |     2970 | 2024-03-26 | Galorys     | L   | 0.402      | -            | -                | -                | -         |    -3.68 | beg0d, dok, dzt, santos, vhz |
|           11 |     3051 | 2024-03-20 | Solid       | W   | 0.361      | 0.450        | 0.037 (0.006)    | 0.791 (0.129)    | 0 (0.000) |     8.75 | beg0d, dok, dzt, santos, vhz |
|           10 |     3052 | 2024-03-20 | Solid       | L   | 0.361      | -            | -                | -                | -         |    -2.63 | beg0d, dok, dzt, santos, vhz |
|            9 |     3136 | 2024-03-15 | ODDIK       | L   | 0.328      | -            | -                | -                | -         |    -1.61 | beg0d, dok, dzt, santos, vhz |
|            8 |     3137 | 2024-03-15 | ODDIK       | L   | 0.328      | -            | -                | -                | -         |    -1.64 | beg0d, dok, dzt, santos, vhz |
|            7 |     3409 | 2024-03-05 | W7M         | W   | 0.262      | 0.450        | 0.008 (0.001)    | 0.495 (0.058)    | 0 (0.000) |     5.73 | beg0d, dok, dzt, santos, vhz |
|            6 |     3411 | 2024-03-05 | W7M         | W   | 0.261      | 0.450        | 0.008 (0.001)    | 0.495 (0.058)    | 0 (0.000) |     5.84 | beg0d, dok, dzt, santos, vhz |
|            5 |     3615 | 2024-02-24 | Case        | L   | 0.195      | -            | -                | -                | -         |    -1.25 | beg0d, dok, dzt, santos, vhz |
|            4 |     3622 | 2024-02-24 | Case        | W   | 0.195      | 0.450        | 0.028 (0.002)    | 0.751 (0.066)    | 0 (0.000) |     4.94 | beg0d, dok, dzt, santos, vhz |
|            3 |     3680 | 2024-02-21 | Imperial    | L   | 0.175      | -            | -                | -                | -         |    -0.12 | beg0d, dok, dzt, santos, vhz |
|            2 |     3684 | 2024-02-21 | Imperial    | L   | 0.175      | -            | -                | -                | -         |    -0.12 | beg0d, dok, dzt, santos, vhz |
|            1 |     3865 | 2024-02-14 | 9z          | L   | 0.128      | -            | -                | -                | -         |    -0.02 | beg0d, dok, dzt, santos, vhz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($811.10)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

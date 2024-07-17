### Roster Details<br />
Team Name: 2GAME<br />
Roster: beg0d, dok, dzt, santos, vhz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [157](../standings_global.md)<br />
Regional Rank: [43]( ../standings_americas.md)<br />
Final Rank Value:  708.9<br />
<br />
Final Rank Value (708.9) = Starting Rank Value (712.7) + Head To Head Adjustments (-3.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 712.7
- 400 + ( ( 0.146 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 712.7


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
|           21 |     2274 | 2024-04-10 | RED Canids  | L   | 0.549      | -            | -                | -                | -         |    -1.15 | beg0d, dok, dzt, santos, vhz |
|           20 |     2278 | 2024-04-10 | RED Canids  | L   | 0.548      | -            | -                | -                | -         |    -1.16 | beg0d, dok, dzt, santos, vhz |
|           19 |     2436 | 2024-04-05 | adalYamigos | W   | 0.515      | 0.450        | 0.000 (0.000)    | 0.109 (0.025)    | 0 (0.000) |     7.49 | beg0d, dok, dzt, santos, vhz |
|           18 |     2437 | 2024-04-05 | adalYamigos | L   | 0.515      | -            | -                | -                | -         |    -8.95 | beg0d, dok, dzt, santos, vhz |
|           17 |     2504 | 2024-04-03 | Sharks      | L   | 0.502      | -            | -                | -                | -         |    -2.58 | beg0d, dok, dzt, santos, vhz |
|           16 |     2507 | 2024-04-03 | Sharks      | L   | 0.502      | -            | -                | -                | -         |    -2.64 | beg0d, dok, dzt, santos, vhz |
|           15 |     2639 | 2024-03-27 | Corinthians | W   | 0.455      | 0.450        | 0.000 (0.000)    | 0.064 (0.013)    | 0 (0.000) |     3.67 | beg0d, dok, dzt, santos, vhz |
|           14 |     2642 | 2024-03-27 | Corinthians | L   | 0.455      | -            | -                | -                | -         |   -10.89 | beg0d, dok, dzt, santos, vhz |
|           13 |     2680 | 2024-03-26 | Galorys     | L   | 0.449      | -            | -                | -                | -         |    -4.03 | beg0d, dok, dzt, santos, vhz |
|           12 |     2682 | 2024-03-26 | Galorys     | L   | 0.449      | -            | -                | -                | -         |    -4.16 | beg0d, dok, dzt, santos, vhz |
|           11 |     2763 | 2024-03-20 | Solid       | W   | 0.408      | 0.450        | 0.047 (0.009)    | 0.622 (0.114)    | 0 (0.000) |     9.87 | beg0d, dok, dzt, santos, vhz |
|           10 |     2764 | 2024-03-20 | Solid       | L   | 0.408      | -            | -                | -                | -         |    -3.00 | beg0d, dok, dzt, santos, vhz |
|            9 |     2848 | 2024-03-15 | ODDIK       | L   | 0.376      | -            | -                | -                | -         |    -1.81 | beg0d, dok, dzt, santos, vhz |
|            8 |     2849 | 2024-03-15 | ODDIK       | L   | 0.375      | -            | -                | -                | -         |    -1.85 | beg0d, dok, dzt, santos, vhz |
|            7 |     3121 | 2024-03-05 | W7M         | W   | 0.309      | 0.450        | 0.005 (0.001)    | 0.418 (0.058)    | 0 (0.000) |     6.45 | beg0d, dok, dzt, santos, vhz |
|            6 |     3123 | 2024-03-05 | W7M         | W   | 0.309      | 0.450        | 0.005 (0.001)    | 0.418 (0.058)    | 0 (0.000) |     6.60 | beg0d, dok, dzt, santos, vhz |
|            5 |     3327 | 2024-02-24 | Case        | L   | 0.242      | -            | -                | -                | -         |    -1.54 | beg0d, dok, dzt, santos, vhz |
|            4 |     3334 | 2024-02-24 | Case        | W   | 0.242      | 0.450        | 0.034 (0.004)    | 0.697 (0.076)    | 0 (0.000) |     6.15 | beg0d, dok, dzt, santos, vhz |
|            3 |     3392 | 2024-02-21 | Imperial    | L   | 0.222      | -            | -                | -                | -         |    -0.09 | beg0d, dok, dzt, santos, vhz |
|            2 |     3396 | 2024-02-21 | Imperial    | L   | 0.222      | -            | -                | -                | -         |    -0.09 | beg0d, dok, dzt, santos, vhz |
|            1 |     3577 | 2024-02-14 | 9z          | L   | 0.176      | -            | -                | -                | -         |    -0.02 | beg0d, dok, dzt, santos, vhz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($853.60)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

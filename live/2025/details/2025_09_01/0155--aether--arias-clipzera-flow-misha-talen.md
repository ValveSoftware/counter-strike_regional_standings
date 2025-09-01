### Roster Details<br />
Team Name: Aether<br />
Roster: arias, clipzera, flow, misha, Talen<br />
Global Rank: [155](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_09_01.md)<br />
Regional Rank: [45]( ../../standings_americas_2025_09_01.md)<br />
<br />
Final Rank Value:  665.9<br />
<br />
Final Rank Value (665.9) = Starting Rank Value (646.6) + Head To Head Adjustments (19.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.6
- 400 + ( ( 0.129 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 646.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |      716 | 2025-07-28 | Arrival Seven    | W   | 0.969      | 0.384        | 0.005 (0.002)    | 0.200 (0.075)    | 0 (0.000) |    17.68 | clipzera, flow, micro, misha, Tender |
|           24 |     2406 | 2025-04-26 | Getting Info     | L   | 0.350      | -            | -                | -                | -         |    -3.01 | arias, clipzera, flow, misha, Talen  |
|           23 |     2463 | 2025-04-23 | Fisher College   | L   | 0.330      | -            | -                | -                | -         |    -4.72 | arias, clipzera, flow, L0NER, misha  |
|           22 |     2507 | 2025-04-20 | JERSA            | W   | 0.310      | 0.333        | 0.000 (0.000)    | 0.123 (0.013)    | 0 (0.000) |     3.10 | arias, clipzera, flow, misha, Talen  |
|           21 |     2524 | 2025-04-19 | Chicken Coop     | L   | 0.302      | -            | -                | -                | -         |    -3.14 | arias, clipzera, flow, misha, Talen  |
|           20 |     2662 | 2025-04-13 | Shimmer          | W   | 0.263      | 0.333        | 0.058 (0.005)    | 0.150 (0.013)    | 0 (0.000) |     6.08 | arias, clipzera, flow, misha, Talen  |
|           19 |     2732 | 2025-04-09 | Getting Info     | L   | 0.236      | -            | -                | -                | -         |    -2.15 | arias, clipzera, flow, misha, Talen  |
|           18 |     2778 | 2025-04-08 | Wanted Goons     | W   | 0.229      | 0.333        | 0.000 (0.000)    | 0.152 (0.012)    | 0 (0.000) |     3.22 | arias, clipzera, flow, misha, Talen  |
|           17 |     2825 | 2025-04-07 | Chicken Coop     | L   | 0.223      | -            | -                | -                | -         |    -2.25 | arias, clipzera, flow, L0NER, misha  |
|           16 |     2829 | 2025-04-07 | Chicken Coop     | W   | 0.223      | 0.477        | 0.002 (0.000)    | 0.337 (0.036)    | 0 (0.000) |     4.84 | arias, clipzera, flow, L0NER, misha  |
|           15 |     2942 | 2025-04-02 | Legacy           | L   | 0.189      | -            | -                | -                | -         |    -0.14 | clipzera, flow, L0NER, misha, Talen  |
|           14 |     2952 | 2025-04-02 | Legacy           | L   | 0.189      | -            | -                | -                | -         |    -0.14 | clipzera, flow, L0NER, misha, Talen  |
|           13 |     3105 | 2025-03-29 | Mythic           | L   | 0.162      | -            | -                | -                | -         |    -3.41 | arias, clipzera, flow, misha, Talen  |
|           12 |     3161 | 2025-03-28 | Marsborne        | L   | 0.157      | -            | -                | -                | -         |    -1.09 | arias, clipzera, flow, misha, Talen  |
|           11 |     3229 | 2025-03-27 | Aether           | W   | 0.150      | 0.769        | -                | 0.008 (0.001)    | 0 (0.000) |     0.93 | arias, clipzera, flow, misha, Talen  |
|           10 |     3303 | 2025-03-26 | Worms            | W   | 0.143      | 0.477        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     1.82 | arias, clipzera, flow, misha, Talen  |
|            9 |     3309 | 2025-03-26 | Worms            | W   | 0.143      | 0.477        | 0.000 (0.000)    | -                | 0 (0.000) |     1.84 | arias, clipzera, flow, misha, Talen  |
|            8 |     3496 | 2025-03-19 | Chicken Coop     | W   | 0.096      | 0.477        | 0.001 (0.000)    | 0.063 (0.003)    | 0 (0.000) |     1.52 | arias, clipzera, flow, misha, Talen  |
|            7 |     3502 | 2025-03-19 | Chicken Coop     | L   | 0.096      | -            | -                | -                | -         |    -1.53 | arias, clipzera, flow, misha, Talen  |
|            6 |     3544 | 2025-03-18 | Vagrants         | W   | 0.090      | 0.477        | 0.003 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.32 | arias, clipzera, flow, misha, Talen  |
|            5 |     3550 | 2025-03-18 | Vagrants         | L   | 0.090      | -            | -                | -                | -         |    -1.52 | arias, clipzera, flow, misha, Talen  |
|            4 |     3720 | 2025-03-10 | InControl        | W   | 0.037      | 0.477        | 0.002 (0.000)    | 0.211 (0.004)    | -         |     0.71 | arias, clipzera, flow, misha, Talen  |
|            3 |     3724 | 2025-03-10 | InControl        | L   | 0.036      | -            | -                | -                | -         |    -0.44 | arias, clipzera, flow, misha, Talen  |
|            2 |     3968 | 2025-03-06 | Party Astronauts | L   | 0.010      | -            | -                | -                | -         |    -0.13 | arias, clipzera, flow, misha, Talen  |
|            1 |     4020 | 2025-03-05 | seoul            | W   | 0.003      | -            | -                | -                | -         |     0.02 | arias, clipzera, flow, misha, Talen  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($539.46)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.450 | $1,200.00      | $539.46         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

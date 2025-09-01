### Roster Details<br />
Team Name: The Last Resort<br />
Roster: b0denmaster, b0RUP, birdfromsky, Keoz, Vegi<br />
Global Rank: [124](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [78]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  744.4<br />
<br />
Final Rank Value (744.4) = Starting Rank Value (737.0) + Head To Head Adjustments (7.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.215[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.181[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 737.0
- 400 + ( ( 0.176 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 737.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      887 | 2025-07-19 | HAWAII            | L   | 0.906      | -            | -                | -                | -         |   -11.78 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           21 |      897 | 2025-07-19 | AimerLegion       | W   | 0.905      | 0.301        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.905) |     3.42 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           20 |      916 | 2025-07-18 | Gentle Mates      | L   | 0.901      | -            | -                | -                | -         |    -1.30 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           19 |     1416 | 2025-06-14 | TNL               | L   | 0.674      | -            | -                | -                | -         |    -2.03 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           18 |     1432 | 2025-06-14 | Eternal Fire      | W   | 0.673      | 0.360        | 0.001 (0.000)    | 0.578 (0.140)    | 1 (0.673) |    13.19 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           17 |     1448 | 2025-06-13 | fnatic            | L   | 0.668      | -            | -                | -                | -         |    -0.54 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           16 |     2877 | 2025-04-04 | BC.Game           | L   | 0.204      | -            | -                | -                | -         |    -3.72 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|           15 |     3089 | 2025-03-30 | 9INE              | L   | 0.165      | -            | -                | -                | -         |    -0.23 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|           14 |     3141 | 2025-03-29 | NOVAQ             | L   | 0.160      | -            | -                | -                | -         |    -1.36 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           13 |     3183 | 2025-03-28 | 9INE              | L   | 0.155      | -            | -                | -                | -         |    -0.21 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           12 |     3263 | 2025-03-27 | ECLOT             | W   | 0.147      | 0.769        | 0.058 (0.007)    | 0.528 (0.060)    | 0 (0.000) |     3.19 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           11 |     3386 | 2025-03-24 | Ninjas in Pyjamas | W   | 0.129      | 0.624        | 0.163 (0.013)    | 0.684 (0.055)    | 0 (0.000) |     3.96 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           10 |     3388 | 2025-03-24 | GhoulsW           | W   | 0.128      | 0.624        | 0.000 (0.000)    | 0.016 (0.001)    | 0 (0.000) |     0.78 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|            9 |     3392 | 2025-03-24 | Betera            | W   | 0.127      | 0.624        | 0.009 (0.001)    | 0.718 (0.057)    | 0 (0.000) |     2.66 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|            8 |     3395 | 2025-03-24 | Woe From Wit      | W   | 0.127      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.52 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|            7 |     3438 | 2025-03-22 | Zero Tenacity     | W   | 0.113      | 0.354        | 0.009 (0.000)    | 0.810 (0.033)    | 0 (0.000) |     2.48 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            6 |     3462 | 2025-03-21 | Zero Tenacity     | L   | 0.107      | -            | -                | -                | -         |    -1.04 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            5 |     3525 | 2025-03-19 | inputprayers      | W   | 0.094      | 0.396        | 0.000 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     0.67 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            4 |     3610 | 2025-03-16 | Betclic           | L   | 0.074      | -            | -                | -                | -         |    -0.33 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            3 |     3617 | 2025-03-16 | Monte             | L   | 0.072      | -            | -                | -                | -         |    -1.33 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            2 |     3696 | 2025-03-12 | 9INE              | L   | 0.046      | -            | -                | -                | -         |    -0.06 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            1 |     3891 | 2025-03-08 | Sashi             | W   | 0.019      | 0.354        | 0.008 (0.000)    | 0.938 (0.006)    | 0 (0.000) |     0.45 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($93.10)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-20 |      0.913 | $102.00        | $93.10          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

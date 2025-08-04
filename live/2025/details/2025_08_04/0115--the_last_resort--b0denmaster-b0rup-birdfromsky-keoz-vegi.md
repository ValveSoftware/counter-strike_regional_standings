### Roster Details<br />
Team Name: The Last Resort<br />
Roster: b0denmaster, b0RUP, birdfromsky, Keoz, Vegi<br />
Global Rank: [115](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [76]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  756.0<br />
<br />
Final Rank Value (756.0) = Starting Rank Value (744.1) + Head To Head Adjustments (11.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.216[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.207[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 744.1
- 400 + ( ( 0.182 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 744.1


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
|           27 |      197 | 2025-07-19 | NXT               | L   | 1.000      | -            | -                | -                | -         |   -12.79 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           26 |      207 | 2025-07-19 | AimerLegion       | W   | 1.000      | 0.301        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     3.54 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           25 |      226 | 2025-07-18 | Iberian Soul      | L   | 1.000      | -            | -                | -                | -         |    -2.17 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           24 |      726 | 2025-06-14 | TNL               | L   | 0.860      | -            | -                | -                | -         |    -2.48 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           23 |      742 | 2025-06-14 | Eternal Fire      | W   | 0.859      | 0.360        | 0.002 (0.000)    | 0.487 (0.151)    | 1 (0.859) |    16.55 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           22 |      758 | 2025-06-13 | fnatic            | L   | 0.854      | -            | -                | -                | -         |    -1.75 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           21 |     2187 | 2025-04-04 | BC.Game           | L   | 0.390      | -            | -                | -                | -         |    -4.21 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|           20 |     2399 | 2025-03-30 | 9INE              | L   | 0.352      | -            | -                | -                | -         |    -1.31 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|           19 |     2451 | 2025-03-29 | NOVAQ             | L   | 0.346      | -            | -                | -                | -         |    -8.01 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           18 |     2493 | 2025-03-28 | 9INE              | L   | 0.341      | -            | -                | -                | -         |    -1.31 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           17 |     2573 | 2025-03-27 | ECLOT             | W   | 0.334      | 0.143        | 0.081 (0.004)    | 0.761 (0.036)    | 0 (0.000) |     7.88 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           16 |     2696 | 2025-03-24 | Ninjas in Pyjamas | W   | 0.315      | 0.143        | 0.192 (0.009)    | 0.904 (0.041)    | 0 (0.000) |     9.73 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           15 |     2698 | 2025-03-24 | GhoulsW           | W   | 0.315      | 0.143        | 0.000 (0.000)    | 0.044 (0.002)    | 0 (0.000) |     2.06 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           14 |     2702 | 2025-03-24 | Betera            | W   | 0.314      | 0.143        | 0.012 (0.001)    | 0.355 (0.016)    | 0 (0.000) |     5.72 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           13 |     2705 | 2025-03-24 | Woe From Wit      | W   | 0.313      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.26 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           12 |     2748 | 2025-03-22 | Zero Tenacity     | W   | 0.300      | 0.354        | 0.012 (0.001)    | 0.849 (0.090)    | 0 (0.000) |     6.54 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|           11 |     2772 | 2025-03-21 | Zero Tenacity     | L   | 0.294      | -            | -                | -                | -         |    -2.88 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|           10 |     2835 | 2025-03-19 | inputprayers      | W   | 0.281      | 0.396        | 0.000 (0.000)    | 0.073 (0.008)    | 0 (0.000) |     2.04 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            9 |     2920 | 2025-03-16 | Betclic           | L   | 0.260      | -            | -                | -                | -         |    -1.15 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            8 |     2927 | 2025-03-16 | Monte             | L   | 0.259      | -            | -                | -                | -         |    -4.20 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            7 |     3006 | 2025-03-12 | 9INE              | L   | 0.233      | -            | -                | -                | -         |    -0.79 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            6 |     3201 | 2025-03-08 | Sashi             | W   | 0.205      | 0.354        | 0.011 (0.001)    | 1.000 (0.073)    | 0 (0.000) |     5.10 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            5 |     3573 | 2025-02-25 | Fire Flux         | L   | 0.133      | -            | -                | -                | -         |    -1.79 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            4 |     3595 | 2025-02-24 | Sangal            | L   | 0.127      | -            | -                | -                | -         |    -1.21 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            3 |     3672 | 2025-02-21 | CYBERSHOKE        | L   | 0.107      | -            | -                | -                | -         |    -1.07 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            2 |     3682 | 2025-02-21 | GhoulsW           | W   | 0.107      | -            | -                | -                | -         |     0.43 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            1 |     3798 | 2025-02-17 | Leo               | L   | 0.080      | -            | -                | -                | -         |    -1.83 | b0RUP, birdfromsky, Licale, nicoodoz, Vegi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($102.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-20 |      1.000 | $102.00        | $102.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

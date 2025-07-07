### Roster Details<br />
Team Name: Chicken Coop<br />
Roster: BAGEL, BiNoX, FRIZZY, LittleBEER, taggy<br />
Global Rank: [139](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [39]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  665.5<br />
<br />
Final Rank Value (665.5) = Starting Rank Value (700.3) + Head To Head Adjustments (-34.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 700.3
- 400 + ( ( 0.161 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 700.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |     1186 | 2025-04-26 | BOSS               | L   | 0.723      | -            | -                | -                | -         |    -4.19 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           40 |     1340 | 2025-04-17 | LFO 4              | L   | 0.662      | -            | -                | -                | -         |    -6.17 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           39 |     1464 | 2025-04-12 | Super Shy          | W   | 0.628      | -            | -                | -                | 0 (0.000) |     3.46 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           38 |     1499 | 2025-04-10 | Wanted Goons       | L   | 0.615      | -            | -                | -                | -         |   -10.89 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           37 |     1509 | 2025-04-09 | Worms              | W   | 0.609      | 0.477        | 0.001 (0.000)    | 0.057 (0.017)    | 0 (0.000) |     6.40 | BAGEL, BiNoX, FRIZZY, Jonji, taggy      |
|           36 |     1511 | 2025-04-09 | Worms              | W   | 0.609      | 0.477        | 0.001 (0.000)    | 0.057 (0.017)    | 0 (0.000) |     6.71 | BAGEL, BiNoX, FRIZZY, Jonji, taggy      |
|           35 |     1611 | 2025-04-07 | Getting Info       | L   | 0.595      | -            | -                | -                | -         |    -3.49 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           34 |     1724 | 2025-04-02 | LFO 4              | L   | 0.562      | -            | -                | -                | -         |    -5.59 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           33 |     1734 | 2025-04-02 | LFO 4              | L   | 0.562      | -            | -                | -                | -         |    -5.84 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           32 |     1791 | 2025-04-01 | NRG                | L   | 0.556      | -            | -                | -                | -         |    -2.30 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           31 |     1795 | 2025-04-01 | NRG                | W   | 0.555      | 0.477        | 0.068 (0.018)    | 0.595 (0.158)    | 0 (0.000) |    15.42 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           30 |     1847 | 2025-03-30 | MIGHT              | L   | 0.542      | -            | -                | -                | -         |    -8.32 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           29 |     1876 | 2025-03-29 | Hooligangsters     | W   | 0.537      | 0.143        | -                | 0.047 (0.004)    | 0 (0.000) |     5.14 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           28 |     1887 | 2025-03-29 | LL                 | W   | 0.535      | -            | -                | -                | 0 (0.000) |     5.07 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           27 |     1948 | 2025-03-28 | Wildcard           | L   | 0.529      | -            | -                | -                | -         |    -2.28 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           26 |     2024 | 2025-03-27 | FlyQuest RED       | W   | 0.522      | 0.143        | 0.031 (0.002)    | 0.170 (0.013)    | 0 (0.000) |    10.19 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           25 |     2083 | 2025-03-26 | InControl          | L   | 0.516      | -            | -                | -                | -         |   -11.51 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           24 |     2088 | 2025-03-26 | InControl          | L   | 0.516      | -            | -                | -                | -         |   -11.94 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           23 |     2279 | 2025-03-19 | Aether             | L   | 0.469      | -            | -                | -                | -         |    -8.24 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           22 |     2285 | 2025-03-19 | Aether             | W   | 0.469      | 0.477        | 0.002 (0.000)    | 0.346 (0.077)    | 0 (0.000) |     6.67 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           21 |     2330 | 2025-03-18 | Akimbo             | L   | 0.463      | -            | -                | -                | -         |    -7.22 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           20 |     2337 | 2025-03-18 | Akimbo             | L   | 0.462      | -            | -                | -                | -         |    -7.53 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           19 |     2557 | 2025-03-09 | Legacy             | W   | 0.401      | 0.477        | 0.124 (0.024)    | 0.954 (0.183)    | 0 (0.000) |    12.38 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           18 |     2558 | 2025-03-09 | Legacy             | W   | 0.401      | 0.477        | 0.124 (0.024)    | 0.954 (0.183)    | 0 (0.000) |    12.41 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           17 |     3182 | 2025-02-19 | Nouns              | L   | 0.283      | -            | -                | -                | -         |    -3.97 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           16 |     3187 | 2025-02-19 | Nouns              | L   | 0.282      | -            | -                | -                | -         |    -4.07 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           15 |     3223 | 2025-02-18 | BOSS               | L   | 0.276      | -            | -                | -                | -         |    -1.71 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           14 |     3227 | 2025-02-18 | BOSS               | L   | 0.276      | -            | -                | -                | -         |    -1.74 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           13 |     3439 | 2025-02-10 | MIGHT              | L   | 0.221      | -            | -                | -                | -         |    -3.56 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           12 |     3480 | 2025-02-09 | Party Astronauts   | L   | 0.214      | -            | -                | -                | -         |    -3.60 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           11 |     3516 | 2025-02-08 | LAG                | W   | 0.208      | 0.143        | 0.001 (0.000)    | -                | -         |     3.03 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|           10 |     3736 | 2025-01-28 | Getting Info       | L   | 0.136      | -            | -                | -                | -         |    -1.12 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            9 |     3741 | 2025-01-28 | Getting Info       | L   | 0.136      | -            | -                | -                | -         |    -1.13 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            8 |     3811 | 2025-01-24 | Party Astronauts   | L   | 0.109      | -            | -                | -                | -         |    -1.92 | BAGEL, FRIZZY, LittleBEER, supa, taggy  |
|            7 |     3816 | 2025-01-24 | Party Astronauts   | L   | 0.109      | -            | -                | -                | -         |    -1.93 | BAGEL, FRIZZY, LittleBEER, supa, taggy  |
|            6 |     3854 | 2025-01-23 | LAG                | W   | 0.103      | 0.477        | 0.015 (0.001)    | 0.456 (0.022)    | -         |     1.89 | BAGEL, FRIZZY, LittleBEER, supa, taggy  |
|            5 |     3859 | 2025-01-23 | LAG                | L   | 0.102      | -            | -                | -                | -         |    -1.35 | BAGEL, FRIZZY, LittleBEER, supa, taggy  |
|            4 |     3886 | 2025-01-22 | Marsborne          | L   | 0.096      | -            | -                | -                | -         |    -1.01 | BAGEL, FRIZZY, LittleBEER, supa, taggy  |
|            3 |     3892 | 2025-01-22 | Marsborne          | W   | 0.096      | 0.477        | 0.013 (0.001)    | 0.486 (0.022)    | -         |     2.02 | BAGEL, FRIZZY, LittleBEER, supa, taggy  |
|            2 |     3920 | 2025-01-21 | Bad News Capybaras | L   | 0.089      | -            | -                | -                | -         |    -1.49 | BAGEL, FRIZZY, LittleBEER, supa, taggy  |
|            1 |     3924 | 2025-01-21 | Bad News Capybaras | L   | 0.089      | -            | -                | -                | -         |    -1.49 | BAGEL, FRIZZY, LittleBEER, supa, taggy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($657.89)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.822 | $800.00        | $657.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

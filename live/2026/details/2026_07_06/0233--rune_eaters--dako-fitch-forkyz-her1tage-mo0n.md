### Roster Details<br />
Team Name: Rune Eaters<br />
Roster: dako, fitch, forkyz, her1tage, mo0N<br />
Global Rank: [233](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [153]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  686.8<br />
<br />
Final Rank Value (686.8) = Starting Rank Value (669.8) + Head To Head Adjustments (17.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.238[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.045[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 669.8
- 400 + ( ( 0.143 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 669.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     3659 | 2026-03-19 | HYPERSPIRIT   | L   | 0.473      | -            | -                | -                | -         |    -3.72 | dako, fitch, forkyz, her1tage, mo0N |
|           14 |     3685 | 2026-03-18 | hindsight     | W   | 0.468      | 0.384        | 0.000 (0.000)    | 0.009 (0.002)    | 0 (0.000) |     4.93 | dako, fitch, forkyz, her1tage, mo0N |
|           13 |     3749 | 2026-03-17 | Rebels        | L   | 0.459      | -            | -                | -                | -         |    -1.46 | dako, fitch, forkyz, her1tage, mo0N |
|           12 |     3789 | 2026-03-16 | AKA HERO KAJO | W   | 0.453      | 0.384        | 0.000 (0.000)    | 0.020 (0.004)    | 0 (0.000) |     2.41 | dako, fitch, forkyz, her1tage, mo0N |
|           11 |     4496 | 2026-03-02 | Clutchain fe  | W   | 0.359      | 0.384        | 0.012 (0.002)    | 0.156 (0.021)    | 0 (0.000) |     6.11 | dako, fitch, forkyz, her1tage, mo0N |
|           10 |     4670 | 2026-02-26 | NOVAQ         | L   | 0.334      | -            | -                | -                | -         |    -3.05 | dako, fitch, forkyz, her1tage, mo0N |
|            9 |     4908 | 2026-02-22 | Nemiga        | L   | 0.305      | -            | -                | -                | -         |    -0.61 | dako, fitch, forkyz, her1tage, mo0N |
|            8 |     5142 | 2026-02-17 | FOKUS         | L   | 0.275      | -            | -                | -                | -         |    -0.28 | dako, fitch, forkyz, her1tage, mo0N |
|            7 |     5150 | 2026-02-17 | Nemiga        | W   | 0.274      | 0.624        | 0.111 (0.019)    | 0.774 (0.133)    | 0 (0.000) |     8.13 | dako, fitch, forkyz, her1tage, mo0N |
|            6 |     5246 | 2026-02-15 | Echo          | L   | 0.261      | -            | -                | -                | -         |    -0.26 | dako, fitch, forkyz, her1tage, mo0N |
|            5 |     5757 | 2026-02-01 | DEPO          | W   | 0.166      | 0.264        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.166) |     1.43 | dako, fitch, forkyz, her1tage, mo0N |
|            4 |     5886 | 2026-01-28 | ALLINNERS     | L   | 0.139      | -            | -                | -                | -         |    -2.55 | dako, fitch, forkyz, her1tage, mo0N |
|            3 |     5892 | 2026-01-27 | NOVAQ         | W   | 0.134      | 0.310        | 0.006 (0.000)    | 0.207 (0.009)    | 1 (0.134) |     3.01 | dako, fitch, forkyz, her1tage, mo0N |
|            2 |     5902 | 2026-01-27 | HOTU          | L   | 0.133      | -            | -                | -                | -         |    -0.11 | dako, fitch, forkyz, her1tage, mo0N |
|            1 |     5910 | 2026-01-27 | NOVAQ         | W   | 0.132      | 0.310        | 0.006 (0.000)    | 0.207 (0.008)    | 1 (0.132) |     2.99 | dako, fitch, forkyz, her1tage, mo0N |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($351.96)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      0.307 | $350.00        | $107.53         |
| 2026-02-01 |      0.166 | $1,055.00      | $175.20         |
| 2026-01-28 |      0.141 | $492.00        | $69.24          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

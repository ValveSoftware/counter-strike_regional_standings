### Roster Details<br />
Team Name: BC.Game<br />
Roster: aragornN, electroNic, krazy, MUTiRiS, s1mple<br />
Global Rank: [122](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [82]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  907.6<br />
<br />
Final Rank Value (907.6) = Starting Rank Value (922.3) + Head To Head Adjustments (-14.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.415[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.067[<sup>2</sup>](#table1)
- LAN Wins: 0.267[<sup>2</sup>](#table1)

The average of these factors is 0.277<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 922.3
- 400 + ( ( 0.277 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 922.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |     1082 | 2026-05-21 | paiN              | L   | 0.891      | -            | -                | -                | -         |    -1.24 | electroNic, krazy, s1mple, ScrunK, Senzu     |
|           30 |     1118 | 2026-05-20 | Falcons           | L   | 0.884      | -            | -                | -                | -         |    -0.08 | electroNic, krazy, s1mple, ScrunK, Senzu     |
|           29 |     1325 | 2026-05-12 | B8                | L   | 0.834      | -            | -                | -                | -         |    -0.66 | electroNic, krazy, s1mple, ScrunK, Senzu     |
|           28 |     1358 | 2026-05-11 | Vitality          | L   | 0.828      | -            | -                | -                | -         |    -0.07 | electroNic, krazy, s1mple, ScrunK, Senzu     |
|           27 |     2405 | 2026-04-07 | FOKUS             | L   | 0.599      | -            | -                | -                | -         |    -2.02 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           26 |     2430 | 2026-04-06 | Voca              | W   | 0.594      | 1.000        | 0.041 (0.024)    | 0.494 (0.294)    | 1 (0.594) |    14.38 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           25 |     2492 | 2026-04-05 | MIBR              | L   | 0.586      | -            | -                | -                | -         |    -0.61 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           24 |     2563 | 2026-04-04 | The MongolZ       | L   | 0.579      | -            | -                | -                | -         |    -0.23 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           23 |     3322 | 2026-03-25 | HEROIC Academy    | L   | 0.512      | -            | -                | -                | -         |   -10.17 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           22 |     3735 | 2026-03-17 | Västerås          | L   | 0.461      | -            | -                | -                | -         |   -12.95 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           21 |     3893 | 2026-03-13 | OG                | L   | 0.436      | -            | -                | -                | -         |    -3.86 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           20 |     3896 | 2026-03-13 | Nexus             | L   | 0.435      | -            | -                | -                | -         |   -10.96 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           19 |     3905 | 2026-03-13 | Alliance          | L   | 0.435      | -            | -                | -                | -         |    -1.01 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           18 |     3916 | 2026-03-13 | GRINGOS           | W   | 0.434      | 0.350        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.434) |     0.65 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           17 |     4811 | 2026-02-23 | illwill           | L   | 0.314      | -            | -                | -                | -         |    -4.60 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           16 |     4822 | 2026-02-23 | MASONIC           | W   | 0.313      | 0.342        | 0.011 (0.001)    | 0.498 (0.053)    | 1 (0.313) |     6.70 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           15 |     4828 | 2026-02-23 | ECSTATIC          | L   | 0.312      | -            | -                | -                | -         |    -4.38 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           14 |     4852 | 2026-02-22 | BOSS              | W   | 0.308      | 0.342        | 0.002 (0.000)    | 0.220 (0.023)    | 1 (0.308) |     2.93 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           13 |     4864 | 2026-02-22 | illwill           | L   | 0.307      | -            | -                | -                | -         |    -4.70 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           12 |     4871 | 2026-02-22 | Sashi             | L   | 0.307      | -            | -                | -                | -         |    -2.75 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           11 |     4883 | 2026-02-22 | 9INE              | W   | 0.307      | 0.342        | 0.004 (0.000)    | 0.077 (0.008)    | 1 (0.307) |     2.75 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           10 |     4900 | 2026-02-22 | MASONIC           | W   | 0.306      | 0.342        | 0.011 (0.001)    | 0.498 (0.052)    | 1 (0.306) |     6.77 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            9 |     5574 | 2026-02-07 | GamerLegion       | L   | 0.206      | -            | -                | -                | -         |    -0.13 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            8 |     5598 | 2026-02-06 | Alliance          | W   | 0.202      | 0.769        | 0.104 (0.016)    | 0.855 (0.132)    | 0 (0.000) |     6.00 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            7 |     5717 | 2026-02-02 | FaZe              | L   | 0.174      | -            | -                | -                | -         |    -0.30 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            6 |     5776 | 2026-01-31 | Vitality          | L   | 0.161      | -            | -                | -                | -         |    -0.03 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            5 |     5821 | 2026-01-30 | Ninjas in Pyjamas | W   | 0.154      | 0.783        | 0.104 (0.013)    | 0.345 (0.041)    | 1 (0.154) |     4.29 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            4 |     5848 | 2026-01-29 | 3DMAX             | L   | 0.147      | -            | -                | -                | -         |    -0.49 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            3 |     5871 | 2026-01-28 | Legacy            | W   | 0.140      | 0.783        | 1.000 (0.110)    | 0.597 (0.066)    | 1 (0.140) |     4.40 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            2 |     6083 | 2026-01-21 | Nemesis           | L   | 0.097      | -            | -                | -                | -         |    -0.71 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            1 |     6113 | 2026-01-21 | Ursa              | L   | 0.094      | -            | -                | -                | -         |    -1.66 | aragornN, electroNic, krazy, MUTiRiS, s1mple |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,939.01)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      0.912 | $5,000.00      | $4,559.07       |
| 2026-05-17 |      0.868 | $4,000.00      | $3,473.11       |
| 2026-04-11 |      0.627 | $18,750.00     | $11,761.07      |
| 2026-02-08 |      0.215 | $10,000.00     | $2,145.75       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

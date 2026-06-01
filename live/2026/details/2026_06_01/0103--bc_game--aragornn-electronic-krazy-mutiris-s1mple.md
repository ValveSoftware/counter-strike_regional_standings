### Roster Details<br />
Team Name: BC.Game<br />
Roster: aragornN, electroNic, krazy, MUTiRiS, s1mple<br />
Global Rank: [103](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [70]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1049.9<br />
<br />
Final Rank Value (1049.9) = Starting Rank Value (1088.8) + Head To Head Adjustments (-38.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.430[<sup>1</sup>](#table2)
- Bounty Collected: 0.419[<sup>2</sup>](#table1)
- Opponent Network: 0.145[<sup>2</sup>](#table1)
- LAN Wins: 0.452[<sup>2</sup>](#table1)

The average of these factors is 0.362<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1088.8
- 400 + ( ( 0.362 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1088.8


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
|           31 |      421 | 2026-05-21 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -1.87 | electroNic, krazy, s1mple, ScrunK, Senzu     |
|           30 |      457 | 2026-05-20 | Falcons           | L   | 1.000      | -            | -                | -                | -         |    -0.20 | electroNic, krazy, s1mple, ScrunK, Senzu     |
|           29 |      664 | 2026-05-12 | B8                | L   | 1.000      | -            | -                | -                | -         |    -1.80 | electroNic, krazy, s1mple, ScrunK, Senzu     |
|           28 |      697 | 2026-05-11 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -0.11 | electroNic, krazy, s1mple, ScrunK, Senzu     |
|           27 |     1744 | 2026-04-07 | FOKUS             | L   | 0.832      | -            | -                | -                | -         |    -3.27 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           26 |     1769 | 2026-04-06 | Voca              | W   | 0.827      | 1.000        | 0.053 (0.044)    | 0.661 (0.547)    | 1 (0.827) |    20.32 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           25 |     1831 | 2026-04-05 | MIBR              | L   | 0.819      | -            | -                | -                | -         |    -2.15 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           24 |     1902 | 2026-04-04 | The MongolZ       | L   | 0.813      | -            | -                | -                | -         |    -0.33 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           23 |     2661 | 2026-03-25 | HEROIC Academy    | L   | 0.746      | -            | -                | -                | -         |   -16.88 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           22 |     3074 | 2026-03-17 | Västerås          | L   | 0.694      | -            | -                | -                | -         |   -20.63 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           21 |     3232 | 2026-03-13 | OG                | L   | 0.669      | -            | -                | -                | -         |    -6.28 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           20 |     3235 | 2026-03-13 | Nexus             | L   | 0.668      | -            | -                | -                | -         |   -17.83 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           19 |     3244 | 2026-03-13 | Alliance          | L   | 0.668      | -            | -                | -                | -         |    -3.77 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           18 |     3255 | 2026-03-13 | GRINGOS           | W   | 0.667      | 0.350        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.667) |     0.40 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           17 |     4150 | 2026-02-23 | illwill           | L   | 0.547      | -            | -                | -                | -         |    -6.94 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           16 |     4161 | 2026-02-23 | MASONIC           | W   | 0.546      | 0.342        | 0.006 (0.001)    | 0.595 (0.111)    | 1 (0.546) |     7.19 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           15 |     4167 | 2026-02-23 | ECSTATIC          | L   | 0.545      | -            | -                | -                | -         |    -7.49 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           14 |     4191 | 2026-02-22 | BOSS              | W   | 0.541      | 0.342        | 0.003 (0.001)    | 0.286 (0.053)    | 1 (0.541) |     3.66 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           13 |     4203 | 2026-02-22 | illwill           | L   | 0.540      | -            | -                | -                | -         |    -7.58 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           12 |     4210 | 2026-02-22 | Sashi             | L   | 0.540      | -            | -                | -                | -         |    -7.47 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           11 |     4222 | 2026-02-22 | 9INE              | W   | 0.540      | 0.342        | 0.010 (0.002)    | 0.186 (0.034)    | 1 (0.540) |     5.28 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|           10 |     4239 | 2026-02-22 | MASONIC           | W   | 0.539      | 0.342        | 0.006 (0.001)    | 0.595 (0.110)    | 1 (0.539) |     7.19 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            9 |     4913 | 2026-02-07 | GamerLegion       | L   | 0.440      | -            | -                | -                | -         |    -0.45 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            8 |     4937 | 2026-02-06 | Alliance          | W   | 0.435      | 0.769        | 0.100 (0.033)    | 0.840 (0.281)    | 0 (0.000) |    11.71 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            7 |     5056 | 2026-02-02 | FaZe              | L   | 0.407      | -            | -                | -                | -         |    -0.80 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            6 |     5115 | 2026-01-31 | Vitality          | L   | 0.395      | -            | -                | -                | -         |    -0.10 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            5 |     5160 | 2026-01-30 | Ninjas in Pyjamas | W   | 0.387      | 0.783        | 0.121 (0.037)    | 0.435 (0.132)    | 1 (0.387) |    10.53 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            4 |     5187 | 2026-01-29 | 3DMAX             | L   | 0.380      | -            | -                | -                | -         |    -0.98 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            3 |     5210 | 2026-01-28 | Legacy            | W   | 0.373      | 0.783        | 1.000 (0.292)    | 0.614 (0.180)    | 1 (0.373) |    11.65 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            2 |     5422 | 2026-01-21 | Nemesis           | L   | 0.330      | -            | -                | -                | -         |    -2.58 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            1 |     5452 | 2026-01-21 | Ursa              | L   | 0.327      | -            | -                | -                | -         |    -7.29 | aragornN, electroNic, krazy, MUTiRiS, s1mple |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,607.92)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-05-17 |      1.000 | $4,000.00      | $4,000.00       |
| 2026-04-11 |      0.860 | $18,750.00     | $16,131.35      |
| 2026-02-08 |      0.448 | $10,000.00     | $4,476.57       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

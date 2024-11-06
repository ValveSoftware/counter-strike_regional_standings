### Roster Details<br />
Team Name: HAVU<br />
Roster: Airax, Jelo, ottoNd, puuha, uli<br />
Global Rank: [212](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [127]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  522.1<br />
<br />
Final Rank Value (522.1) = Starting Rank Value (516.6) + Head To Head Adjustments (5.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 516.6
- 400 + ( ( 0.059 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 516.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     2536 | 2024-08-11 | Illuminar        | L   | 0.620      | -            | -                | -                | -         |    -1.38 | Airax, Jelo, ottoNd, puuha, uli |
|           15 |     2587 | 2024-08-09 | Monte Gen        | W   | 0.606      | 0.435        | 0.008 (0.002)    | 0.480 (0.126)    | 0 (0.000) |    16.29 | Airax, Jelo, ottoNd, puuha, uli |
|           14 |     2639 | 2024-08-07 | FLuffy Gangsters | L   | 0.594      | -            | -                | -                | -         |    -4.10 | Airax, Jelo, ottoNd, puuha, uli |
|           13 |     2704 | 2024-08-06 | Metizport        | L   | 0.586      | -            | -                | -                | -         |    -2.24 | Airax, Jelo, ottoNd, puuha, uli |
|           12 |     2714 | 2024-08-06 | UNPAID           | L   | 0.585      | -            | -                | -                | -         |    -0.29 | Airax, Jelo, ottoNd, puuha, uli |
|           11 |     2730 | 2024-08-05 | SovvyKiNG        | L   | 0.579      | -            | -                | -                | -         |    -3.78 | Airax, Jelo, ottoNd, puuha, uli |
|           10 |     2823 | 2024-08-02 | ENCE Academy     | L   | 0.561      | -            | -                | -                | -         |    -3.61 | Airax, Jelo, ottoNd, puuha, uli |
|            9 |     2997 | 2024-07-29 | Permitta         | L   | 0.533      | -            | -                | -                | -         |    -0.82 | Airax, Jelo, ottoNd, puuha, uli |
|            8 |     3117 | 2024-07-25 | ECLOT            | L   | 0.506      | -            | -                | -                | -         |    -0.40 | Airax, Jelo, ottoNd, puuha, uli |
|            7 |     3444 | 2024-07-17 | Rhyno            | L   | 0.453      | -            | -                | -                | -         |    -1.77 | Airax, Jelo, ottoNd, puuha, uli |
|            6 |     3995 | 2024-06-09 | Zero Tenacity    | L   | 0.199      | -            | -                | -                | -         |    -0.41 | Airax, Jelo, ottoNd, puuha, uli |
|            5 |     4096 | 2024-06-07 | GUN5             | L   | 0.187      | -            | -                | -                | -         |    -0.45 | Airax, Jelo, ottoNd, puuha, uli |
|            4 |     4185 | 2024-06-06 | Sampi            | L   | 0.179      | -            | -                | -                | -         |    -0.41 | Airax, Jelo, ottoNd, puuha, uli |
|            3 |     4305 | 2024-06-03 | RUBY             | W   | 0.160      | 0.435        | 0.017 (0.001)    | 0.286 (0.020)    | 0 (0.000) |     4.00 | Airax, Jelo, ottoNd, puuha, uli |
|            2 |     4316 | 2024-06-02 | UHKA             | W   | 0.154      | 0.143        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     1.65 | Airax, Jelo, ottoNd, puuha, uli |
|            1 |     4330 | 2024-06-02 | Heimo            | W   | 0.152      | 0.143        | 0.001 (0.000)    | 0.163 (0.004)    | 0 (0.000) |     3.24 | Airax, Jelo, ottoNd, puuha, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: HAVU<br />
Roster: Airax, Jelo, ottoNd, puuha, uli<br />
Global Rank: [216](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [131]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  512.1<br />
<br />
Final Rank Value (512.1) = Starting Rank Value (509.5) + Head To Head Adjustments (2.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.5
- 400 + ( ( 0.055 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 509.5


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
|           16 |     2974 | 2024-08-11 | Illuminar        | L   | 0.494      | -            | -                | -                | -         |    -0.84 | Airax, Jelo, ottoNd, puuha, uli |
|           15 |     3025 | 2024-08-09 | Monte Gen        | W   | 0.480      | 0.435        | 0.008 (0.002)    | 0.401 (0.084)    | 0 (0.000) |    12.97 | Airax, Jelo, ottoNd, puuha, uli |
|           14 |     3077 | 2024-08-07 | FLuffy Gangsters | L   | 0.468      | -            | -                | -                | -         |    -3.10 | Airax, Jelo, ottoNd, puuha, uli |
|           13 |     3142 | 2024-08-06 | Metizport        | L   | 0.460      | -            | -                | -                | -         |    -0.10 | Airax, Jelo, ottoNd, puuha, uli |
|           12 |     3152 | 2024-08-06 | UNPAID           | L   | 0.459      | -            | -                | -                | -         |    -0.26 | Airax, Jelo, ottoNd, puuha, uli |
|           11 |     3168 | 2024-08-05 | SovvyKiNG        | L   | 0.453      | -            | -                | -                | -         |    -4.70 | Airax, Jelo, ottoNd, puuha, uli |
|           10 |     3261 | 2024-08-02 | ENCE Academy     | L   | 0.435      | -            | -                | -                | -         |    -2.58 | Airax, Jelo, ottoNd, puuha, uli |
|            9 |     3435 | 2024-07-29 | Permitta         | L   | 0.407      | -            | -                | -                | -         |    -0.15 | Airax, Jelo, ottoNd, puuha, uli |
|            8 |     3555 | 2024-07-25 | ECLOT            | L   | 0.380      | -            | -                | -                | -         |    -0.06 | Airax, Jelo, ottoNd, puuha, uli |
|            7 |     3882 | 2024-07-17 | Rhyno            | L   | 0.327      | -            | -                | -                | -         |    -0.13 | Airax, Jelo, ottoNd, puuha, uli |
|            6 |     4433 | 2024-06-09 | Zero Tenacity    | L   | 0.073      | -            | -                | -                | -         |    -0.08 | Airax, Jelo, ottoNd, puuha, uli |
|            5 |     4534 | 2024-06-07 | GUN5             | L   | 0.062      | -            | -                | -                | -         |    -0.13 | Airax, Jelo, ottoNd, puuha, uli |
|            4 |     4623 | 2024-06-06 | Sampi            | L   | 0.053      | -            | -                | -                | -         |    -0.06 | Airax, Jelo, ottoNd, puuha, uli |
|            3 |     4743 | 2024-06-03 | RUBY             | W   | 0.034      | 0.435        | 0.010 (0.000)    | 0.214 (0.003)    | 0 (0.000) |     0.86 | Airax, Jelo, ottoNd, puuha, uli |
|            2 |     4754 | 2024-06-02 | UHKA             | W   | 0.028      | 0.143        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.31 | Airax, Jelo, ottoNd, puuha, uli |
|            1 |     4768 | 2024-06-02 | Heimo            | W   | 0.027      | 0.143        | 0.001 (0.000)    | 0.141 (0.001)    | 0 (0.000) |     0.59 | Airax, Jelo, ottoNd, puuha, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

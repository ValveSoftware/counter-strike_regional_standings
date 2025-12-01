### Roster Details<br />
Team Name: Aether<br />
Roster: arcade, micro, misha, Sathsea, Tender<br />
Global Rank: [181](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [45]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  683.3<br />
<br />
Final Rank Value (683.3) = Starting Rank Value (667.1) + Head To Head Adjustments (16.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.255[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 667.1
- 400 + ( ( 0.140 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 667.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      915 | 2025-10-27 | BOSS         | L   | 0.969      | -            | -                | -                | -         |   -10.81 | arcade, ayaneuu, micro, Sathsea, Tender  |
|           17 |      955 | 2025-10-26 | Voca         | L   | 0.963      | -            | -                | -                | -         |    -6.68 | arcade, ayaneuu, micro, Sathsea, Tender  |
|           16 |     1071 | 2025-10-24 | regain       | W   | 0.949      | 0.363        | 0.003 (0.001)    | 0.364 (0.125)    | 0 (0.000) |    17.61 | arcade, micro, misha, Sathsea, Tender    |
|           15 |     2345 | 2025-09-18 | Wildcard     | L   | 0.709      | -            | -                | -                | -         |    -3.23 | arcade, micro, misha, Sathsea, Tender    |
|           14 |     2378 | 2025-09-17 | BOSS         | W   | 0.703      | 0.363        | 0.009 (0.002)    | 0.455 (0.116)    | 0 (0.000) |    14.69 | arcade, micro, misha, Sathsea, Tender    |
|           13 |     2562 | 2025-09-12 | Outfit 49    | W   | 0.669      | 0.363        | 0.000 (0.000)    | 0.059 (0.014)    | 0 (0.000) |     6.85 | arcade, micro, misha, Sathsea, Tender    |
|           12 |     2604 | 2025-09-11 | Mythic       | W   | 0.663      | 0.363        | 0.002 (0.000)    | 0.261 (0.063)    | 0 (0.000) |    10.47 | arcade, micro, misha, Sathsea, Tender    |
|           11 |     2656 | 2025-09-10 | OverKnight   | W   | 0.656      | 0.363        | 0.000 (0.000)    | 0.356 (0.085)    | 0 (0.000) |    10.88 | arcade, micro, misha, Sathsea, Tender    |
|           10 |     2761 | 2025-09-08 | Outfit 49    | L   | 0.643      | -            | -                | -                | -         |   -13.86 | arcade, micro, misha, Sathsea, Tender    |
|            9 |     3104 | 2025-08-24 | BOSS         | L   | 0.542      | -            | -                | -                | -         |    -5.88 | arcade, Jeebs, micro, obi, Tender        |
|            8 |     3136 | 2025-08-22 | Sakura       | W   | 0.529      | 0.333        | 0.046 (0.008)    | 0.350 (0.062)    | 0 (0.000) |    12.31 | arcade, micro, N2o, obi, Tender          |
|            7 |     3199 | 2025-08-20 | MIGHT        | W   | 0.511      | 0.333        | 0.000 (0.000)    | 0.036 (0.006)    | 0 (0.000) |     4.36 | arcade, micro, N2o, obi, Tender          |
|            6 |     3207 | 2025-08-19 | Zomblers     | L   | 0.509      | -            | -                | -                | -         |    -7.31 | arcade, micro, N2o, obi, Tender          |
|            5 |     3240 | 2025-08-17 | Phoenix      | L   | 0.495      | -            | -                | -                | -         |    -5.80 | arcade, arias, clipzera, micro, Tender   |
|            4 |     3271 | 2025-08-16 | NRG          | L   | 0.489      | -            | -                | -                | -         |    -0.50 | arcade, arias, clipzera, Sathsea, Tender |
|            3 |     3409 | 2025-08-13 | MIGHT        | L   | 0.469      | -            | -                | -                | -         |   -11.04 | arcade, arias, clipzera, micro, Tender   |
|            2 |     3463 | 2025-08-12 | M80          | L   | 0.462      | -            | -                | -                | -         |    -0.26 | arcade, arias, clipzera, micro, Tender   |
|            1 |     3509 | 2025-08-11 | Wanted Goons | W   | 0.456      | 0.363        | 0.000 (0.000)    | 0.139 (0.023)    | 0 (0.000) |     4.39 | arcade, arias, clipzera, micro, Tender   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($735.93)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-22 |      0.736 | $1,000.00      | $735.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

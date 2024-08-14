### Roster Details<br />
Team Name: NAVI Junior<br />
Roster: cmtry, dem0n, dziugss, Krabeni, makazze<br />
Global Rank: [153](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [98]( ../standings_europe.md)<br />
<br />
Final Rank Value:  703.7<br />
<br />
Final Rank Value (703.7) = Starting Rank Value (701.1) + Head To Head Adjustments (2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.280[<sup>1</sup>](#table2)
- Bounty Collected: 0.289[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 701.1
- 400 + ( ( 0.153 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 701.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      194 | 2024-08-08 | Illuminar  | L   | 1.000      | -            | -                | -                | -         |    -8.86 | cmtry, dem0n, dziugss, Krabeni, makazze  |
|           15 |      283 | 2024-08-06 | UNiTY      | L   | 1.000      | -            | -                | -                | -         |    -7.18 | cmtry, dem0n, dziugss, Krabeni, makazze  |
|           14 |     1638 | 2024-06-08 | Rhyno      | L   | 0.751      | -            | -                | -                | -         |    -5.09 | cmtry, dem0n, dziugss, froz1k, Krabeni   |
|           13 |     1757 | 2024-06-06 | Endpoint   | W   | 0.738      | 0.500        | 0.042 (0.016)    | 0.591 (0.218)    | 0 (0.000) |    17.71 | cmtry, dem0n, dziugss, froz1k, Krabeni   |
|           12 |     1808 | 2024-06-05 | Sampi      | L   | 0.732      | -            | -                | -                | -         |    -5.93 | cmtry, dem0n, dziugss, froz1k, Krabeni   |
|           11 |     1859 | 2024-06-04 | MOUZ NXT   | L   | 0.725      | -            | -                | -                | -         |    -2.59 | cmtry, dem0n, dziugss, froz1k, Krabeni   |
|           10 |     1879 | 2024-06-03 | Entropiq   | W   | 0.719      | 0.379        | 0.000 (0.000)    | 0.026 (0.007)    | 0 (0.000) |     3.42 | cmtry, dem0n, dziugss, froz1k, Krabeni   |
|            9 |     1987 | 2024-05-30 | Permitta   | L   | 0.693      | -            | -                | -                | -         |    -5.52 | cmtry, dem0n, dziugss, froz1k, Krabeni   |
|            8 |     2211 | 2024-05-21 | Illuminar  | W   | 0.632      | 0.379        | 0.011 (0.003)    | 0.405 (0.097)    | 0 (0.000) |    14.09 | cmtry, dem0n, dziugss, froz1k, Krabeni   |
|            7 |     3604 | 2024-03-30 | GL Academy | L   | 0.285      | -            | -                | -                | -         |    -4.33 | dem0n, dezt, Krabeni, Magic, makazze     |
|            6 |     3613 | 2024-03-29 | Passion UA | W   | 0.279      | 0.333        | 0.168 (0.016)    | 1.000 (0.093)    | 0 (0.000) |     7.62 | dem0n, dezt, Krabeni, Magic, makazze     |
|            5 |     3616 | 2024-03-29 | Sashi      | W   | 0.277      | 0.333        | 0.008 (0.001)    | 0.019 (0.002)    | 0 (0.000) |     3.97 | dem0n, dezt, Krabeni, Magic, makazze     |
|            4 |     3663 | 2024-03-27 | Metizport  | L   | 0.266      | -            | -                | -                | -         |    -2.82 | dem0n, dezt, Krabeni, Magic, makazze     |
|            3 |     3779 | 2024-03-20 | FORZE      | L   | 0.219      | -            | -                | -                | -         |    -2.02 | dem0n, froz1k, Krabeni, Magic, makazze   |
|            2 |     4445 | 2024-02-20 | ECLOT      | L   | 0.025      | -            | -                | -                | -         |    -0.04 | alkarenn, dem0n, Krabeni, Magic, makazze |
|            1 |     4478 | 2024-02-19 | Viperio    | W   | 0.017      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.09 | alkarenn, dem0n, Krabeni, Magic, makazze |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($854.15)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
